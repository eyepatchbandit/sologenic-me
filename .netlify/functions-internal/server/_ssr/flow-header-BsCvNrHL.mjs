import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flow-header-BsCvNrHL.js
var import_jsx_runtime = require_jsx_runtime();
function FlowHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
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
	});
}
//#endregion
export { FlowHeader as t };
