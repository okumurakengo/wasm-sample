import { wasmBrowserInstantiate } from "./instantiateWasm.js";

(async () => {
  const wasmModule = await wasmBrowserInstantiate("./hello-world.wasm");

  const addResult = wasmModule.instance.exports.add(24, 24);

  document.body.textContent = `Hello World! addResult: ${addResult}`;
})();
