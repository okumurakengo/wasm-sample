import { wasmBrowserInstantiate } from "./instantiateWasm.js";

(async () => {
    const wasmModule = await wasmBrowserInstantiate("memory.wasm");

    const exports = wasmModule.instance.exports;

    // memoryオブジェクトを取得
    const memory = exports.memory;

    const wasmByteMemoryArray = new Uint8Array(memory.buffer);

    // wasmで設定したインデックスの0番目の値を取得できる
    console.log(wasmByteMemoryArray[0]); // 24

    // インデックスの1番目に25と設定
    wasmByteMemoryArray[1] = 25;
    // インデックスの1番目を取得する関数を実行
    console.log(exports.readWasmMemoryAndReturnIndexOne()); // 25
})();
