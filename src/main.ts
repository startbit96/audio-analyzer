import "./style.css";
import init from "../audio-analyzer-lib/pkg/audio_analyzer_lib.js";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1 class="bg-red-400">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

// Initialize WebAssembly functionality.
init().then((exports) => {
  const myValues = new Int32Array([1,2,3]);
  const wasmMemoryArray = new Int32Array(exports.memory.buffer);
  const inputPointer = exports.get_input_buffer_pointer();
  const valueByteSize = exports.get_buffer_value_byte_size();
  wasmMemoryArray.set(myValues, inputPointer / valueByteSize);
  console.log(exports.get_sum());
});
