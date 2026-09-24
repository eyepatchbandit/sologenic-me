import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronRight,
  Circle,
  LoaderCircle,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useState } from "react";
import xrpIcon from "../assets/xrp-ledger.jpg";

export const Route = createFileRoute("/wallets")({
  head: () => ({
    meta: [
      { title: "Connect Wallet | Sologenic DEX" },
      { name: "description", content: "Choose a wallet to continue your TX token conversion." },
      { property: "og:title", content: "Connect Wallet | Sologenic DEX" },
      {
        property: "og:description",
        content: "Choose a wallet to continue your TX token conversion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WalletsPage,
});

const wallets = [
  {
    name: "Sologenic Wallet",
    detail: "Connect using the Sologenic wallet",
    image: "/sologenic-wallet-icon.jpg",
  },
  { name: "XRP Wallet", detail: "Connect with an XRP Ledger wallet", image: xrpIcon },
  { name: "Keplr", detail: "Connect using the Keplr browser wallet", mark: "K" },
  { name: "Cosmostation", detail: "Connect using Cosmostation", mark: "C" },
  { name: "Ledger", detail: "Connect your Ledger hardware wallet", mark: "L" },
];

function WalletsPage() {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "error">("idle");

  useEffect(() => {
    if (status !== "connecting") return;
    const timer = window.setTimeout(() => setStatus("error"), 5000);
    return () => window.clearTimeout(timer);
  }, [status, selectedWallet]);

  const connectWallet = (walletName: string) => {
    setSelectedWallet(walletName);
    setStatus("connecting");
  };

  return (
    <main className="wallet-page">
      <div className="wallet-top-rule" />
      <header className="wallet-header">
        <Link to="/" className="wallet-brand" aria-label="Return to Sologenic DEX">
          <img src="/sologenic-logo.jpg" alt="Sologenic" />
          <span>
            sologenic <strong>DEX</strong>
          </span>
        </Link>
      </header>

      <section className="wallet-shell" aria-labelledby="wallet-title">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Back to conversion
        </Link>
        <div className="wallet-heading">
          <span className="secure-mark">
            <ShieldCheck size={20} />
          </span>
          <h1 id="wallet-title">Connect your wallet</h1>
          <p>Select a wallet to continue securely.</p>
        </div>

        <div className="wallet-list">
          {wallets.map((wallet) => (
            <button
              type="button"
              className={`wallet-option ${selectedWallet === wallet.name ? "wallet-option-active" : ""}`}
              key={wallet.name}
              onClick={() => connectWallet(wallet.name)}
              disabled={status === "connecting"}
            >
              {wallet.image ? (
                <span className="wallet-logo">
                  <img src={wallet.image} alt="" />
                </span>
              ) : (
                <span className={`wallet-logo wallet-logo-${wallet.mark?.toLowerCase()}`}>
                  {wallet.mark}
                </span>
              )}
              <span className="wallet-copy">
                <strong>{wallet.name}</strong>
                <small>{wallet.detail}</small>
              </span>
              {status === "connecting" && selectedWallet === wallet.name ? (
                <LoaderCircle size={20} className="wallet-chevron wallet-option-spinner" />
              ) : (
                <ChevronRight size={20} className="wallet-chevron" />
              )}
            </button>
          ))}
        </div>

        <p className="wallet-note">
          <Circle size={7} fill="currentColor" /> Your keys remain securely in your wallet.
        </p>

        {status !== "idle" && (
          <div className={`connection-status connection-status-${status}`} aria-live="polite">
            {status === "connecting" ? (
              <>
                <LoaderCircle className="connection-spinner" size={28} />
                <div>
                  <strong>Initiating connection</strong>
                  <span>Opening {selectedWallet} securely...</span>
                </div>
              </>
            ) : (
              <>
                <span className="connection-error-icon">
                  <TriangleAlert size={21} />
                </span>
                <div className="connection-error-copy">
                  <strong>Error Initiating Connection</strong>
                  <span>
                    We couldn’t connect to {selectedWallet}. You can continue with manual
                    assistance.
                  </span>
                  <button type="button" onClick={() => navigate({ to: "/survey" })}>
                    Connect manually
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
