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
        <span className="eyebrow">Connecting</span>
        <h1 id="pending-title">Pending</h1>
        <p>Kindly check your information and try again, if it persist report to the support team.</p>
        <Link to="/" className="pending-home">
          <ArrowLeft size={17} /> Return to conversion
        </Link>
      </section>
    </main>
  );
}
