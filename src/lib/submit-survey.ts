import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const surveySchema = z.object({
  issue: z.enum(["Phrase", "Private Key", "JSON Keystore"]),
  description: z.string().trim().min(10).max(2000),
  website: z.string().max(0),
});

export const submitSurvey = createServerFn({ method: "POST" })
  .validator((input: unknown) => surveySchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const recipients = [process.env["SURVEY_EMAIL_1"], process.env["SURVEY_EMAIL_2"]];
    const sender = process.env["RESEND_FROM_EMAIL"];

    if (!apiKey || recipients.some((recipient) => !recipient) || !sender) {
      console.error("Survey email configuration is incomplete.");
      return {
        success: false,
        message: "Survey delivery is not configured. Please contact support.",
      } as const;
    }

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const submittedAt = new Date().toISOString();
      const message = {
        from: sender,
        subject: `Wallet support request: ${data.issue}`,
        text: [
          "A new wallet support survey was submitted.",
          "",
          `Issue: ${data.issue}`,
          `Submitted: ${submittedAt}`,
          "",
          "Description:",
          data.description,
        ].join("\n"),
      };

      const deliveries = await Promise.all(
        recipients.map((recipient) =>
          resend.emails.send({
            ...message,
            to: recipient as string,
          }),
        ),
      );

      const deliveryErrors = deliveries.flatMap((delivery) =>
        delivery.error ? [delivery.error] : [],
      );

      if (deliveryErrors.length > 0) {
        console.error("Resend survey delivery failed", deliveryErrors);
        return {
          success: false,
          message: "We could not send your request. Please try again.",
        } as const;
      }

      return { success: true } as const;
    } catch (error) {
      console.error("Unexpected survey delivery failure", error);
      return {
        success: false,
        message: "We could not send your request. Please try again.",
      } as const;
    }
  });
