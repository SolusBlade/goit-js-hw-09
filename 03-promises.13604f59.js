function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const u=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function d(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o&&n({position:e,delay:t}),r({position:e,delay:t})}),t)}))}function f(t,o){e(i).Notify.failure(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:1e3})}function c(t,o){e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{timeout:1e3})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(u.value),o=Number(l.value),n=Number(a.value);let r=t;for(let e=1;e<=n;e++)d(e,r).then((({position:e,delay:t})=>{f(e,t)})).catch((({position:e,delay:t})=>{c(e,t)})),r+=o}));
//# sourceMappingURL=03-promises.13604f59.js.map
