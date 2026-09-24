import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FlowHeader } from "./flow-header-BsCvNrHL.mjs";
import { h as ArrowLeft, m as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pending-B0XRWL6f.js
var import_jsx_runtime = require_jsx_runtime();
function PendingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flow-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wallet-top-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pending-shell",
				"aria-labelledby": "pending-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pending-loader",
						role: "status",
						"aria-label": "Request pending",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pending-orbit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pending-check",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 25 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Request received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "pending-title",
						children: "Your request is pending"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We’ve received your details and the support team will review the connection issue." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "pending-home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 }), " Return to conversion"]
					})
				]
			})
		]
	});
}
//#endregion
export { PendingPage as component };
