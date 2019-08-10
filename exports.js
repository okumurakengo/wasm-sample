import { wasmBrowserInstantiate } from "./instantiateWasm.js";

(async () => {
    const wasmModule = await wasmBrowserInstantiate("./exports.wasm");

    // instance.exports にエクスポートされた関数などが設定されるsetteisareru
    // 参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming#Return_value
    const exports = wasmModule.instance.exports;

    // エクスポートしたcallMeFromJavascriptを実行
    console.log(exports.callMeFromJavascript(24, 24)); // 49

    // 定数の場合は `.valueOf()` を使う
    // ※場合によっては単純に exports.GET_THIS_CONSTANT_FROM_JAVASCRIPT になると注意書きあり
    console.log(exports.GET_THIS_CONSTANT_FROM_JAVASCRIPT.valueOf()); // 2424

    // exportしていない関数にはアクセスできない
    console.log(exports.addIntegerWithConstant); // undefined
})();
