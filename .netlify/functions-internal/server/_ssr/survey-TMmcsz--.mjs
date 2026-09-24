import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as isRedirect, _ as useRouter, g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FlowHeader } from "./flow-header-BsCvNrHL.mjs";
import { a as Send, d as CircleQuestionMark, h as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-ACL1MeeT.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/survey-TMmcsz--.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var submitSurvey = createServerFn({ method: "POST" }).validator((input) => surveySchema.parse(input)).handler(createSsrRpc("ebd2a9559ef73fc220a8656cfdf9ce271148866399fd7703993d5ea68afc7afb"));
var issueOptions = [
	"connection issue",
	"wallet issues",
	"Any other issue"
];
function SurveyPage() {
	const navigate = useNavigate();
	const sendSurvey = useServerFn(submitSurvey);
	const [issue, setIssue] = (0, import_react.useState)("connection issue");
	const [description, setDescription] = (0, import_react.useState)("");
	const [website, setWebsite] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		if (description.trim().length < 10) {
			setError("Please add at least 10 characters so we can understand the issue.");
			return;
		}
		setSubmitting(true);
		try {
			const result = await sendSurvey({ data: {
				issue,
				description,
				website
			} });
			if (!result.success) {
				setError(result.message);
				setSubmitting(false);
				return;
			}
			await navigate({ to: "/pending" });
		} catch (caught) {
			setError(caught instanceof Error ? caught.message : "We could not send your request. Please try again.");
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flow-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wallet-top-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flow-shell survey-shell",
				"aria-labelledby": "survey-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wallets",
					className: "back-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 }), " Back to wallets"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flow-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flow-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "Manual assistance"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									id: "survey-title",
									children: "Tell us what went wrong"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Share a few details and our support team will review your request." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "survey-form",
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "issue",
									children: "Issue type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "select-wrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "issue",
										value: issue,
										onChange: (event) => setIssue(event.target.value),
										children: issueOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "description",
									children: "Description"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "description",
									value: description,
									onChange: (event) => setDescription(event.target.value),
									placeholder: ".....",
									rows: 7,
									maxLength: 2e3,
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-meta",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Follow the instructions as closely as possible." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [description.length, "/2000"] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "form-honeypot",
									name: "website",
									value: website,
									onChange: (event) => setWebsite(event.target.value),
									tabIndex: -1,
									autoComplete: "off",
									"aria-hidden": "true"
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "form-error",
									role: "alert",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "survey-submit",
									type: "submit",
									disabled: submitting,
									children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "button-spinner",
										"aria-hidden": "true"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 17 }), submitting ? "Submitting..." : "Submit request"]
								})
							]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { SurveyPage as component };
