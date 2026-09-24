import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { FlowHeader } from "../components/flow-header";

export const Route = createFileRoute("/pending")({
  head: () => ({
    meta: [
      { title: "Request Pending | Sologenic DEX" },
      { name: "description", content: "Your wallet support request is pending review." },
    ],
  }),
  component: PendingPage,
});

function PendingPage() {
  return (
    <main className="flow-page">
      <div className="wallet-top-rule" />
      <FlowHeader />

      <section className="pending-shell" aria-labelledby="pending-title">
        <div className="pending-loader" role="status" aria-label="Request pending">
          <span className="pending-orbit" />
          <span className="pending-check">
            <Check size={25} />
          </span>
        </div>
        <span className="eyebrow">Request received</span>
        <h1 id="pending-title">Your request is pending</h1>
        <p>We’ve received your details and the support team will review the connection issue.</p>
        <Link to="/" className="pending-home">
          <ArrowLeft size={17} /> Return to conversion
        </Link>
      </section>
    </main>
  );
}
