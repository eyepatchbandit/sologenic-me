import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronDown, CircleHelp, ExternalLink, Globe2, Radio, Sun, Wallet } from "lucide-react";
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import terrain from "../assets/red-wireframe-terrain.jpg";
import txIcon from "../assets/tx-org.png";
import xrpIcon from "../assets/xrp-ledger.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sologenic DEX | Trade Digital Assets Fast & Securely" },
      {
        name: "description",
        content: "Convert existing tokens to the upgraded TX chain with Sologenic DEX.",
      },
      { property: "og:title", content: "Convert to TX | Sologenic DEX" },
      {
        property: "og:description",
        content: "Convert existing tokens to the upgraded TX chain with Sologenic DEX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConvertPage,
});

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "muted" | "network";
};

function AppButton({ variant = "muted", className = "", ...props }: AppButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    muted: "bg-control text-foreground hover:bg-control-hover",
    network: "border border-border bg-header text-foreground hover:bg-control",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

function SoloMark({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <span
      className={size === "large" ? "token-mark token-mark-large" : "token-mark"}
      aria-hidden="true"
    >
      <img src="/sologenic-logo.jpg" alt="" />
    </span>
  );
}

function TxMark({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <span
      className={size === "large" ? "token-mark token-mark-large" : "token-mark"}
      aria-hidden="true"
    >
      <img src={txIcon} alt="" />
    </span>
  );
}

function XrpMark() {
  return (
    <span className="token-mark token-mark-large" aria-hidden="true">
      <img src={xrpIcon} alt="" />
    </span>
  );
}

function Waveform() {
  return (
    <div className="signal-wave" aria-hidden="true">
      <svg viewBox="0 0 240 60" preserveAspectRatio="none">
        <path
          className="wave-glow"
          d="M0 30 C10 30 12 12 22 12 S34 48 44 48 S56 18 66 18 S78 40 88 40 S100 7 112 7 S126 53 138 53 S150 20 160 20 S174 39 184 39 S198 13 208 13 S222 30 240 30"
        />
        <path
          className="wave-line"
          d="M0 30 C10 30 12 12 22 12 S34 48 44 48 S56 18 66 18 S78 40 88 40 S100 7 112 7 S126 53 138 53 S150 20 160 20 S174 39 184 39 S198 13 208 13 S222 30 240 30"
        />
      </svg>
    </div>
  );
}

function NavItem({ children, menu }: { children: ReactNode; menu?: boolean }) {
  return (
    <a href="#converter" className="nav-item">
      {children}
      {menu && <ChevronDown size={13} strokeWidth={2.5} />}
    </a>
  );
}

function ConvertPage() {
  const [amounts, setAmounts] = useState(["", "", ""]);
  const navigate = useNavigate();

  const openWallets = () => navigate({ to: "/wallets" });
  const updateAmount = (index: number, value: string) => {
    setAmounts((current) => current.map((amount, i) => (i === index ? value : amount)));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="top-rule" />
      <header className="site-header">
        <a href="#converter" className="brand" aria-label="Sologenic DEX home">
          <img className="brand-logo" src="/sologenic-logo.jpg" alt="" />
          <span>sologenic</span>
          <span className="brand-dex">DEX</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavItem>Trade</NavItem>
          <NavItem>NFTs</NavItem>
          <NavItem>Bridge</NavItem>
          <NavItem menu>Token Hub</NavItem>
          <NavItem menu>Swap</NavItem>
          <NavItem menu>Fiat</NavItem>
        </nav>

        <div className="header-actions">
          <AppButton variant="network" className="network-button" aria-label="Select network">
            <span>Mainnet</span>
            <Radio size={16} className="text-success" />
            <ChevronDown size={14} className="text-subtle" />
          </AppButton>
          <AppButton variant="primary" className="header-wallet" onClick={openWallets}>
            <Wallet size={17} className="mobile-wallet-icon" />
            <span>Connect Wallet</span>
          </AppButton>
          <span className="header-divider" />
          <button className="icon-control" aria-label="Language">
            <Globe2 size={23} />
          </button>
          <button className="icon-control" aria-label="Display theme">
            <Sun size={24} />
          </button>
        </div>
      </header>

      <main id="converter" className="converter-page">
        <img
          src={terrain}
          alt=""
          aria-hidden="true"
          className="terrain"
          width={1536}
          height={1024}
        />

        <section className="intro">
          <h1>Convert to TX</h1>
          <p>Convert your existing tokens to the new upgraded chain in one simple step</p>
          <div className="intro-links">
            <a href="#details">
              <ExternalLink size={18} />
              Learn more about TX
            </a>
            <a href="#details">
              <ExternalLink size={18} />
              Read conversion details
            </a>
          </div>
        </section>

        <section className="converter-card" aria-label="Token conversion form">
          <div className="chains">
            <div className="chain">
              <span className="chain-label">Origin</span>
              <div className="chain-orbit">
                <XrpMark />
              </div>
              <strong>XRP Ledger</strong>
              <AppButton onClick={openWallets} className="chain-button">
                Connect Wallet
              </AppButton>
              <AppButton onClick={openWallets} className="validate-button">
                Validate
              </AppButton>
            </div>

            <Waveform />

            <div className="chain">
              <span className="chain-label">Destination</span>
              <div className="chain-orbit">
                <TxMark size="large" />
              </div>
              <strong>TX</strong>
              <AppButton onClick={openWallets} className="chain-button">
                Connect Wallet
              </AppButton>
              <AppButton onClick={openWallets} className="validate-button">
                Validate
              </AppButton>
            </div>
          </div>

          <div className="amount-grid">
            <AmountBox
              icon={
                <span className="mini-token">
                  <img src={xrpIcon} alt="" />
                </span>
              }
              value={amounts[0] ?? ""}
              onChange={(value) => updateAmount(0, value)}
              onMax={() => updateAmount(0, "0")}
            />
            <AmountBox
              icon={<SoloMark />}
              value={amounts[1] ?? ""}
              onChange={(value) => updateAmount(1, value)}
              onMax={() => updateAmount(1, "0")}
            />
            <AmountBox
              icon={<TxMark />}
              value={amounts[2] ?? ""}
              onChange={(value) => updateAmount(2, value)}
              onMax={() => updateAmount(2, "0")}
            />
          </div>

          <div className="destination" id="details">
            <label htmlFor="destination-address">Destination Address</label>
            <div className="address-field">
              <TxMark />
              <input
                id="destination-address"
                placeholder="Destination wallet address"
                aria-label="Destination wallet address"
              />
              <AppButton onClick={openWallets} className="address-connect">
                Connect Wallet
              </AppButton>
            </div>
          </div>

          <dl className="conversion-details">
            <div>
              <dt>
                Estimated Time <CircleHelp size={15} />
              </dt>
              <dd>2–3 minutes</dd>
            </div>
            <div>
              <dt>
                Min Amount <CircleHelp size={15} />
              </dt>
              <dd>
                1 <small>TX</small>
              </dd>
            </div>
            <div>
              <dt>
                You Will Receive <CircleHelp size={15} />
              </dt>
              <dd>
                0 <small>TX</small>
              </dd>
            </div>
          </dl>

          <AppButton variant="primary" className="submit-button" onClick={openWallets}>
            Connect Wallet
          </AppButton>
        </section>
      </main>
    </div>
  );
}

function AmountBox({
  icon,
  value,
  onChange,
  onMax,
}: {
  icon: ReactNode;
  value: string;
  onChange: (value: string) => void;
  onMax: () => void;
}) {
  return (
    <div className="amount-box">
      <div className="amount-head">
        {icon}
        <button type="button" onClick={onMax}>
          Max
        </button>
      </div>
      <input
        inputMode="decimal"
        value={value}
        onChange={(event) => onChange(event.target.value.replace(/[^0-9.]/g, ""))}
        placeholder="---"
        aria-label="Conversion amount"
      />
    </div>
  );
}
