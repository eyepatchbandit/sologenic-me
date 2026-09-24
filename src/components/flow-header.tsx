import { Link } from "@tanstack/react-router";

export function FlowHeader() {
  return (
    <header className="wallet-header">
      <Link to="/" className="wallet-brand" aria-label="Return to Sologenic DEX">
        <img src="/sologenic-logo.jpg" alt="Sologenic" />
        <span>
          sologenic <strong>DEX</strong>
        </span>
      </Link>
    </header>
  );
}
