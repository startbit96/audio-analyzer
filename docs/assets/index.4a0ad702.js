const p = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList")
        for (const c of r.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerpolicy && (r.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = a(o);
    fetch(o.href, r);
  }
};
p();
let s;
const l = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
l.decode();
let i = null;
function b() {
  return (
    (i === null || i.buffer !== s.memory.buffer) &&
      (i = new Uint8Array(s.memory.buffer)),
    i
  );
}
function f(t, e) {
  return l.decode(b().subarray(t, t + e));
}
const w = new TextEncoder("utf-8");
w.encodeInto;
async function u(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(t, e);
      } catch (n) {
        if (t.headers.get("Content-Type") != "application/wasm")
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            n
          );
        else throw n;
      }
    const a = await t.arrayBuffer();
    return await WebAssembly.instantiate(a, e);
  } else {
    const a = await WebAssembly.instantiate(t, e);
    return a instanceof WebAssembly.Instance ? { instance: a, module: t } : a;
  }
}
async function d(t) {
  typeof t == "undefined" &&
    (t = new URL(
      "./assets/audio_analyzer_lib_bg.adf1a7af.wasm",
      self.location
    ));
  const e = {};
  (e.wbg = {}),
    (e.wbg.__wbg_alert_01ad86f87b150e93 = function (o, r) {
      alert(f(o, r));
    }),
    (typeof t == "string" ||
      (typeof Request == "function" && t instanceof Request) ||
      (typeof URL == "function" && t instanceof URL)) &&
      (t = fetch(t));
  const { instance: a, module: n } = await u(await t, e);
  return (s = a.exports), (d.__wbindgen_wasm_module = n), s;
}
const g = document.querySelector("#app");
g.innerHTML = `
  <h1 class="bg-red-400">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
d().then((t) => {
  console.log(t.add(4, 1));
});
