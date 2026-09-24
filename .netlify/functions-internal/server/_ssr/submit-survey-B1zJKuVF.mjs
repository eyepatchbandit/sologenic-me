import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-survey-B1zJKuVF.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var surveySchema = objectType({
	issue: enumType([
		"connection issue",
		"wallet issues",
		"Any other issue"
	]),
	description: stringType().trim().min(10).max(2e3),
	website: stringType().max(0)
});
var submitSurvey_createServerFn_handler = createServerRpc({
	id: "ebd2a9559ef73fc220a8656cfdf9ce271148866399fd7703993d5ea68afc7afb",
	name: "submitSurvey",
	filename: "src/lib/submit-survey.ts"
}, (opts) => submitSurvey.__executeServer(opts));
var submitSurvey = createServerFn({ method: "POST" }).validator((input) => surveySchema.parse(input)).handler(submitSurvey_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.RESEND_API_KEY;
	const recipients = [process.env.SURVEY_EMAIL_1, process.env.SURVEY_EMAIL_2];
	const sender = process.env.RESEND_FROM_EMAIL;
	if (!apiKey || recipients.some((recipient) => !recipient) || !sender) {
		console.error("Survey email configuration is incomplete.");
		return {
			success: false,
			message: "Survey delivery is not configured. Please contact support."
		};
	}
	try {
		const { Resend } = await import("../_libs/resend+standardwebhooks.mjs").then((n) => n.t);
		const resend = new Resend(apiKey);
		const submittedAt = (/* @__PURE__ */ new Date()).toISOString();
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
				data.description
			].join("\n")
		};
		const deliveryErrors = (await Promise.all(recipients.map((recipient) => resend.emails.send({
			...message,
			to: recipient
		})))).flatMap((delivery) => delivery.error ? [delivery.error] : []);
		if (deliveryErrors.length > 0) {
			console.error("Resend survey delivery failed", deliveryErrors);
			return {
				success: false,
				message: "We could not send your request. Please try again."
			};
		}
		return { success: true };
	} catch (error) {
		console.error("Unexpected survey delivery failure", error);
		return {
			success: false,
			message: "We could not send your request. Please try again."
		};
	}
});
//#endregion
export { submitSurvey_createServerFn_handler };
