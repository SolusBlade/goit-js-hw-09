!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON"),u=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function l(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o&&t({position:e,delay:n}),i({position:e,delay:n})}),n)}))}function f(n,o){e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{timeout:1e3})}function d(n,o){e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{timeout:1e3})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.value),o=Number(c.value),t=Number(a.value),i=n,r=1;r<=t;r++)l(r,i).then((function(e){f(e.position,e.delay)})).catch((function(e){d(e.position,e.delay)})),i+=o}))}();
//# sourceMappingURL=03-promises.26a47098.js.map