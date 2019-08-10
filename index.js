import { wasmBrowserInstantiate } from "./instantiateWasm.js";

(async () => {
    const wasmModule = await wasmBrowserInstantiate("index.wasm", {
        index: {
            consoleLog: value => console.log(value)
        },
        env: {
            abort: () => console.log("Abort!")
        },
    });
})();
