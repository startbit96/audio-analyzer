import "./style.css";
import init from "../audio-analyzer-lib/pkg/audio_analyzer_lib.js";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1 class="bg-red-400">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

// Initialize WebAssembly functionality.
init().then((exports) => {
  console.log(exports.add(4, 1));
})