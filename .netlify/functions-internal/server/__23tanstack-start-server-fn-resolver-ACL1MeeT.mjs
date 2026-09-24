//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-ACL1MeeT.js
var manifest = { "ebd2a9559ef73fc220a8656cfdf9ce271148866399fd7703993d5ea68afc7afb": {
	functionName: "submitSurvey_createServerFn_handler",
	importer: () => import("./_ssr/submit-survey-B1zJKuVF.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
