import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ChevronRight, h as ArrowLeft, i as ShieldCheck, n as TriangleAlert, s as LoaderCircle, u as Circle } from "../_libs/lucide-react.mjs";
import { t as xrp_ledger_default } from "./xrp-ledger-CnmZqOD6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wallets-Bx-4LeHR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var wallets = [
	{
		name: "XRP Wallet",
		detail: "Connect with an XRP Ledger wallet",
		image: xrp_ledger_default
	},
	{
		name: "Keplr",
		detail: "Connect using the Keplr browser wallet",
		mark: "K"
	},
	{
		name: "Cosmostation",
		detail: "Connect using Cosmostation",
		mark: "C"
	},
	{
		name: "Ledger",
		detail: "Connect your Ledger hardware wallet",
		mark: "L"
	}
];
function WalletsPage() {
	const navigate = useNavigate();
	const [selectedWallet, setSelectedWallet] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		if (status !== "connecting") return;
		const timer = window.setTimeout(() => setStatus("error"), 5e3);
		return () => window.clearTimeout(timer);
	}, [status, selectedWallet]);
	const connectWallet = (walletName) => {
		setSelectedWallet(walletName);
		setStatus("connecting");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "wallet-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wallet-top-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "wallet-header",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "wallet-brand",
					"aria-label": "Return to Sologenic DEX",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/sologenic-logo.jpg",
						alt: "Sologenic"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["sologenic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "DEX" })] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wallet-shell",
				"aria-labelledby": "wallet-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "back-link",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), " Back to conversion"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wallet-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "secure-mark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 20 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								id: "wallet-title",
								children: "Connect your wallet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Select a wallet to continue securely." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wallet-list",
						children: wallets.map((wallet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `wallet-option ${selectedWallet === wallet.name ? "wallet-option-active" : ""}`,
							onClick: () => connectWallet(wallet.name),
							disabled: status === "connecting",
							children: [
								wallet.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "wallet-logo",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: wallet.image,
										alt: ""
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `wallet-logo wallet-logo-${wallet.mark?.toLowerCase()}`,
									children: wallet.mark
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "wallet-copy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: wallet.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: wallet.detail })]
								}),
								status === "connecting" && selectedWallet === wallet.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									size: 20,
									className: "wallet-chevron wallet-option-spinner"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 20,
									className: "wallet-chevron"
								})
							]
						}, wallet.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "wallet-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
							size: 7,
							fill: "currentColor"
						}), " Your keys remain securely in your wallet."]
					}),
					status !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `connection-status connection-status-${status}`,
						"aria-live": "polite",
						children: status === "connecting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "connection-spinner",
							size: 28
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Initiating connection" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Opening ",
							selectedWallet,
							" securely..."
						] })] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "connection-error-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 21 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "connection-error-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Error Initiating Connection" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"We couldn’t connect to ",
									selectedWallet,
									". You can continue with manual assistance."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => navigate({ to: "/survey" }),
									children: "Connect manually"
								})
							]
						})] })
					})
				]
			})
		]
	});
}
//#endregion
export { WalletsPage as component };
