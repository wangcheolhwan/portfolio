// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5PXcc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "61987999c97e8a59";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1G1ve":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _notice = require("../data/notice");
var _noticeDefault = parcelHelpers.interopDefault(_notice);
var _imgUrl = require("../data/imgUrl");
var _imgUrlDefault = parcelHelpers.interopDefault(_imgUrl);
function addActive(el) {
    el.classList.add("active");
}
function removeActive(el) {
    el.classList.remove("active");
}
function siblingActive(click, arr) {
    arr.forEach((el)=>{
        el.classList.remove("active");
    });
    click.classList.add("active");
}
/* 헤더 메뉴창 제어 */ const headerEl = document.querySelector("header");
const menuEl = document.querySelector(".box_menu");
const gnbEls = document.querySelectorAll(".gnb");
menuEl.setAttribute("data-hovered", "false");
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) headerEl.classList.add("bg_white_01");
    else if (menuEl.getAttribute("data-hovered") === "false") headerEl.classList.remove("bg_white_01");
});
menuEl.addEventListener("mouseenter", ()=>{
    headerEl.classList.add("bg_white_02");
    menuEl.setAttribute("data-hovered", "true");
    document.body.classList.add("filter");
});
menuEl.addEventListener("mouseleave", ()=>{
    headerEl.classList.remove("bg_white_02");
    menuEl.setAttribute("data-hovered", "false");
    document.body.classList.remove("filter");
});
[
    ...gnbEls
].forEach((gnbEl)=>{
    gnbEl.addEventListener("mouseenter", ()=>{
        addActive(gnbEl);
    });
    gnbEl.addEventListener("mouseleave", ()=>{
        removeActive(gnbEl);
    });
});
/* 검색창 제어 */ const searchEl = document.querySelector(".box_search");
const searchInputEl = searchEl.querySelector("input");
searchEl.addEventListener("click", ()=>{
    searchInputEl.focus();
});
searchInputEl.addEventListener("focus", ()=>{
    searchEl.classList.add("focused");
});
searchInputEl.addEventListener("blur", ()=>{
    searchEl.classList.remove("focused");
});
/* 사이드 퀵메뉴 제어 */ const sideMenuEl = document.querySelector("#snb");
const sideMenuImgEl = document.querySelector("#snb img");
const quickMenuEl = document.querySelector(".quick_menu");
const closeQuickMenuEl = document.querySelector(".snb_close");
sideMenuImgEl.addEventListener("click", ()=>{
    quickMenuEl.classList.add("show");
});
closeQuickMenuEl.addEventListener("click", (event)=>{
    quickMenuEl.classList.remove("show");
    event.stopPropagation();
});
document.addEventListener("DOMContentLoaded", ()=>{
    quickMenuEl.classList.add("show");
});
/* top,bottom 버튼 제어 */ const toTopEl = document.querySelector(".to_top");
const toBottomEl = document.querySelector(".to_bottom");
toTopEl.addEventListener("click", ()=>{
    gsap.to(window, .5, {
        scrollTo: 0
    });
});
toBottomEl.addEventListener("click", ()=>{
    gsap.to(window, .5, {
        scrollTo: {
            y: "max"
        }
    });
});
/* 햄버거 메뉴창 제어 */ const openNavEl = document.querySelector(".box_open_nav");
const closeNavEl = document.querySelector(".lnb_close");
const lnbEl = document.querySelector("#lnb");
const lnbMenuEls = document.querySelectorAll(".lnb_menu");
const innerMenuEls = document.querySelectorAll(".box_lnb_menu");
openNavEl.addEventListener("click", ()=>{
    lnbEl.style.display = "block";
    document.body.style.overflow = "hidden";
});
closeNavEl.addEventListener("click", ()=>{
    lnbEl.style.display = "none";
    document.body.style.overflow = "auto";
});
[
    ...lnbMenuEls
].forEach((lnbMenuEl)=>{
    lnbMenuEl.addEventListener("mouseenter", ()=>{
        addActive(lnbMenuEl);
    });
    lnbMenuEl.addEventListener("mouseleave", ()=>{
        removeActive(lnbMenuEl);
    });
});
[
    ...innerMenuEls
].forEach((innerMenuEl)=>{
    innerMenuEl.addEventListener("mouseenter", ()=>{
        addActive(innerMenuEl);
    });
    innerMenuEl.addEventListener("mouseleave", ()=>{
        removeActive(innerMenuEl);
    });
});
/* 스크롤에 따른 요소 감시 */ const spyEls = document.querySelectorAll(".scroll-spy");
spyEls.forEach(function(spyEl) {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: .9
    }).setClassToggle(spyEl, "show").addTo(new ScrollMagic.Controller());
});
/* 공지사항 탭 제어 */ const contentsEl = document.querySelector("#container_01 .content");
function sortDate(data) {
    return data.slice().sort((a, b)=>new Date(b.date) - new Date(a.date));
}
const allItemEls = sortDate((0, _noticeDefault.default)).slice(0, 6);
const notificationEls = sortDate((0, _noticeDefault.default)).filter((notice)=>notice.type === "\uACF5\uC9C0");
const collusionEls = sortDate((0, _noticeDefault.default)).filter((notice)=>notice.type === "\uACF5\uBAA8");
const employmentEls = sortDate((0, _noticeDefault.default)).filter((notice)=>notice.type === "\uCC44\uC6A9");
const contentArray = [
    allItemEls,
    notificationEls,
    collusionEls,
    employmentEls
];
contentArray.forEach((items, index)=>{
    const ulEl = document.createElement("ul");
    ulEl.classList.add("list_content");
    items.forEach((item)=>{
        const liEl = document.createElement("li");
        const type = item.type;
        liEl.classList.add("item_content");
        liEl.innerHTML = /* html */ `
      <span class="${type === "\uACF5\uC9C0" ? "notification" : type === "\uACF5\uBAA8" ? "collusion" : "employment"}">${type}</span>
      <p>${item.title}</p>
    `;
        ulEl.append(liEl);
    });
    ulEl.dataset.num = "item_0" + (index + 1);
    contentsEl.append(ulEl);
});
const listContentELs = document.querySelectorAll(".list_content");
const itemSubTitEls = document.querySelectorAll(".item_subTit");
const firstChild = listContentELs[0];
const iconEl = document.querySelector("#container_01 .xi-plus");
firstChild.classList.add("active");
itemSubTitEls.forEach((subTit)=>{
    const $span = subTit.querySelector("span");
    const dataNum = subTit.getAttribute("data-num");
    const siblings = [
        ...subTit.parentElement.children
    ];
    $span.addEventListener("click", (event)=>{
        if (event.currentTarget.parentElement.dataset.num === "item_01") iconEl.classList.add("hidden");
        else iconEl.classList.remove("hidden");
        siblings.forEach((sibling)=>{
            sibling.classList.remove("active");
        });
        event.currentTarget.parentElement.classList.add("active");
        listContentELs.forEach((listContentEl)=>{
            listContentEl.classList.remove("active");
            if (listContentEl.dataset.num === dataNum) listContentEl.classList.add("active");
        });
    });
});
/* slider 제어 */ var mySwiper = new Swiper("#container_01 .swiper", {
    autoplay: {
        delay: 3000
    },
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: "#container_01 .swiper-pagination",
        type: "fraction",
        clickable: true
    },
    navigation: {
        prevEl: "#container_01 .swiper-button-prev",
        nextEl: "#container_01 .swiper-button-next"
    }
});
// 시작 버튼, 멈춤 버튼
const playBtnEl = document.querySelector("#container_01 .swiper-button-play");
const stopBtnEl = document.querySelector("#container_01 .swiper-button-pause");
playBtnEl.addEventListener("click", function() {
    mySwiper.autoplay.start();
    playBtnEl.classList.remove("show");
    stopBtnEl.classList.add("show");
});
stopBtnEl.addEventListener("click", function() {
    mySwiper.autoplay.stop();
    stopBtnEl.classList.remove("show");
    playBtnEl.classList.add("show");
});
/* 아코디언 메뉴 제어 */ const openMenuEls = document.querySelectorAll("#container_02 .item_img");
[
    ...openMenuEls
].forEach((MenuEl)=>{
    MenuEl.addEventListener("click", ()=>{
        if (!MenuEl.classList.contains("active")) {
            const activeMenuEl = document.querySelector("#container_02 .item_img.active");
            activeMenuEl.classList.remove("active");
            MenuEl.classList.add("active");
        }
    });
});
/* 이미지 불러오기 */ const imgEls = document.querySelectorAll("#container_02 .ImportImg");
const errorImageURL = "https://www.lh.or.kr/error/img/noimage.jpg";
function addImageToContainer(container, url) {
    const img = new Image();
    img.src = url;
    container.prepend(img);
    img.addEventListener("error", ()=>{
        const errorImg = new Image();
        errorImg.src = errorImageURL;
        container.prepend(errorImg);
    });
}
imgEls.forEach((container, index)=>{
    addImageToContainer(container, (0, _imgUrlDefault.default)[index] || errorImageURL);
});
/* 유튜브 슬라이드 */ new Swiper("#container_02 .inner_04 .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true
    },
    initialSlide: 1,
    navigation: {
        prevEl: "#container_02 .swiper-button-prev",
        nextEl: "#container_02 .swiper-button-next"
    }
});
/* 유튜브 제어 */ const playEls = document.querySelectorAll("#container_02 .swiper .xi-play");
playEls.forEach((playEl, index)=>{
    const youtubeEls = document.querySelectorAll(".wrap_video");
    playEl.addEventListener("click", ()=>{
        const youtubeEl = youtubeEls[index];
        const closeEl = youtubeEl.querySelector(".xi-close");
        youtubeEl.classList.add("active");
        document.body.style.overflow = "hidden";
        closeEl.addEventListener("click", ()=>{
            youtubeEl.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });
});
/* 유튜브 링크 */ const linkYoutebeEl = document.querySelector("#container_02 .inner_05 .box_img");
linkYoutebeEl.addEventListener("click", ()=>{
    window.open("https://www.youtube.com/watch?v=LZhpnarxOHM", "_blank");
});
/* 배너 슬라이드 제어 */ let initialSlidesPerView = 6;
const bnrSwiper = new Swiper("#bnr .swiper", {
    autoplay: {
        delay: 3000
    },
    slidesPerView: initialSlidesPerView,
    loop: true,
    navigation: {
        nextEl: "#bnr .swiper-button-next",
        prevEl: "#bnr .swiper-button-prev"
    }
});
// 반응형 slidesPerView 제어
function updateSlidesPerView() {
    if (window.matchMedia("(max-width: 768px)").matches) bnrSwiper.params.slidesPerView = 2;
    else if (window.matchMedia("(max-width: 1024px)").matches) bnrSwiper.params.slidesPerView = 4;
    else bnrSwiper.params.slidesPerView = initialSlidesPerView;
    bnrSwiper.update();
}
updateSlidesPerView();
window.addEventListener("resize", updateSlidesPerView);
// 시작 버튼, 멈춤 버튼
const bnrPlayBtnEl = document.querySelector("#bnr .swiper-button-play");
const bnrStopBtnEl = document.querySelector("#bnr .swiper-button-pause");
bnrPlayBtnEl.addEventListener("click", function() {
    bnrSwiper.autoplay.start();
    bnrPlayBtnEl.classList.remove("show");
    bnrStopBtnEl.classList.add("show");
});
bnrStopBtnEl.addEventListener("click", function() {
    bnrSwiper.autoplay.stop();
    bnrStopBtnEl.classList.remove("show");
    bnrPlayBtnEl.classList.add("show");
});
/* 모바일 lnb 제어 */ const mobilePackMeunEls = document.querySelectorAll("#lnb .package_menu li");
const mobileLnbTitEls = document.querySelectorAll("#lnb .item_title");
const mobileLnbSubTitEls = document.querySelectorAll("#lnb .item_main_menu");
[
    ...mobilePackMeunEls
].forEach((el, index)=>{
    el.addEventListener("click", ()=>{
        el.parentElement.classList.add("hide");
        mobileLnbTitEls[index].classList.add("active");
    });
});
[
    ...mobileLnbTitEls
].forEach((el)=>{
    el.addEventListener("click", (event)=>{
        siblingActive(event.currentTarget, mobileLnbTitEls);
    });
});
[
    ...mobileLnbSubTitEls
].forEach((el)=>{
    el.addEventListener("click", (event)=>{
        if (event.currentTarget.innerHTML.includes('<i class="xi-angle-down-min"></i>')) siblingActive(event.currentTarget, mobileLnbSubTitEls);
    });
});
/* 모바일 관련사이트 제어 */ const mobileLinkEl = document.querySelector(".link_mobile");
mobileLinkEl.addEventListener("click", (e)=>{
    e.currentTarget.classList.toggle("active");
});

},{"../data/notice":"2SAgo","../data/imgUrl":"3ZuFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SAgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    {
        type: "\uACF5\uC9C0",
        num: 1,
        title: "\uC81C16\uAE30 LH \uAE30\uC220\uC2EC\uC0AC\uD3C9\uAC00\uC704\uC6D0 \uD6C4\uBCF4\uC790 \uBAA8\uC9D1 \uC548\uB0B4",
        date: "2024-01-18"
    },
    {
        type: "\uACF5\uC9C0",
        num: 2,
        title: "[\uC815\uC815\uACF5\uACE0] \uC81C16\uAE30 LH \uAE30\uC220\uC2EC\uC0AC\uD3C9\uAC00\uC704\uC6D0 \uD6C4\uBCF4\uC790 \uBAA8\uC9D1 \uC548\uB0B4",
        date: "2024-01-24"
    },
    {
        type: "\uACF5\uC9C0",
        num: 3,
        title: "LH\uC8FC\uAC70\uBCF5\uC9C0\uC815\uBCF4(\uC8FC) \uBE44\uC0C1\uC784\uC774\uC0AC \uACF5\uBAA8",
        date: "2024-01-30"
    },
    {
        type: "\uACF5\uC9C0",
        num: 4,
        title: "LH \uBD84\uC591\uAC00 \uC2EC\uC0AC\uC704\uC6D0\uD68C \uC704\uC6D0\uBA85\uB2E8 \uACF5\uAC1C",
        date: "2024-01-31"
    },
    {
        type: "\uACF5\uC9C0",
        num: 5,
        title: "\uD1A0\uC9C0\uD574\uC57D \uBC18\uD658\uC2DC \uC801\uC6A9\uC774\uC790\uC728 \uC54C\uB9BC(2024. 2\uC6D4)",
        date: "2024-02-01	"
    },
    {
        type: "\uACF5\uC9C0",
        num: 6,
        title: "\uACBD\uAE30\uBD81\uBD80\uC9C0\uC5ED\uBCF8\uBD80 \uC77C\uBD80 \uBD80\uC11C \uC804\uD654 \uC5F0\uACB0 \uBD88\uAC00 \uC548\uB0B4(2.8.(\uBAA9))",
        date: "2024-02-07"
    },
    {
        type: "\uACF5\uBAA8",
        num: 1,
        title: "\uB300\uAD6C\uC2E0\uC11C\uD601\uC2E0 6\uB2E8\uC9C0(\uC2E0\uC11CA-2BL) \uC0AC\uD68C\uC801\uAE30\uC5C5\uACF5\uAC04 \uC785\uC8FC\uD76C\uB9DD\uAE30\uC5C5 \uACF5\uBAA8 \uACF5\uACE0",
        date: "2024-01-31"
    },
    {
        type: "\uACF5\uBAA8",
        num: 2,
        title: "\uC11C\uC6B8 \uC804\uC138\uC784\uB300 \uACC4\uC57D\uC5C5\uBB34 \uC218\uD0C1\uC790 \uC120\uC815 \uACB0\uACFC",
        date: "2024-01-31"
    },
    {
        type: "\uACF5\uBAA8",
        num: 3,
        title: "\uACBD\uB0A8\uAD8C \uC804\uC138\uC784\uB300 \uACC4\uC57D\uC5C5\uBB34 \uC218\uD0C1\uC790 \uBAA8\uC9D1\uACF5\uACE0",
        date: "	2024-02-01"
    },
    {
        type: "\uACF5\uBAA8",
        num: 4,
        title: "2024\uB144 \uD1A0\uC9C0\uC8FC\uD0DD\uC5F0\uAD6C\uC6D0 \uC778\uC1C4\uC5C5\uCCB4 \uC120\uC815\xb7\uB4F1\uB85D \uBC0F \uB2E8\uAC00\uACC4\uC57D",
        date: "2024-02-05"
    },
    {
        type: "\uACF5\uBAA8",
        num: 5,
        title: "\uACBD\uAE30\uBD81\uBD80 \uC804\uC138\uC784\uB300 \uACC4\uC57D\uC5C5\uBB34 \uC704\uD0C1\uC6A9\uC5ED \uC218\uD0C1\uC790 \uC120\uC815\uACB0\uACFC",
        date: "2024-02-06"
    },
    {
        type: "\uACF5\uBAA8",
        num: 6,
        title: "\uBC95\uBB34\uC0AC\uB4F1 \uC120\uC815\uACB0\uACE0 \uACF5\uACE0(\uC74D\uB0B4\uB3D91(\uD6A8\uC790\uAD6C\uC5ED))",
        date: "2024-02-10"
    },
    {
        type: "\uCC44\uC6A9",
        num: 1,
        title: "LH \uC0AC\uB0B4\uBCC0\uD638\uC0AC \uCC44\uC6A9\uACF5\uACE0",
        date: "2024-01-28"
    },
    {
        type: "\uCC44\uC6A9",
        num: 2,
        title: "\uD55C\uAD6D\uD1A0\uC9C0\uC8FC\uD0DD\uACF5\uC0AC \uAC15\uC6D0\uC9C0\uC5ED\uBCF8\uBD80 \uAE30\uAC04\uC81C\uADFC\uB85C\uC790",
        date: "2024-01-30"
    },
    {
        type: "\uCC44\uC6A9",
        num: 3,
        title: "LH \uB300\uAD6C\uACBD\uBD81\uC9C0\uC5ED\uBCF8\uBD80 \uAE30\uAC04\uC81C \uADFC\uB85C\uC790 \uCC44\uC6A9 \uACF5\uACE0",
        date: "2024-02-01"
    },
    {
        type: "\uCC44\uC6A9",
        num: 4,
        title: "LH \uB300\uC804\uCDA9\uB0A8\uC9C0\uC5ED\uBCF8\uBD80 \uAE30\uAC04\uC81C \uADFC\uB85C\uC790 \uCC44\uC6A9 \uACF5\uACE0",
        date: "2024-02-02"
    },
    {
        type: "\uCC44\uC6A9",
        num: 5,
        title: "LH \uC804\uBD81\uC9C0\uC5ED\uBCF8\uBD80 \uAE30\uAC04\uC81C\uADFC\uB85C\uC790 \uCC44\uC6A9\uACF5\uACE0",
        date: "2024-02-03"
    },
    {
        type: "\uCC44\uC6A9",
        num: 6,
        title: "LH \uC0AC\uB0B4\uBCC0\uD638\uC0AC \uCC44\uC6A9\uACF5\uACE0",
        date: "2024-02-08"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3ZuFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    "https://www.lh.or.kr/galleryThumbViewMain.es?bid=0003&list_no=11366&view=thumb_202402221708417601.jpg",
    "",
    "https://www.lh.or.kr/galleryThumbViewMain.es?bid=0003&list_no=11361&view=thumb_202402211229148841.JPG",
    "https://www.lh.or.kr/galleryThumbViewMain.es?bid=0004&list_no=11362&view=thumb_202402220944576511.png",
    "https://www.lh.or.kr/galleryThumbViewMain.es?bid=0004&list_no=11356&view=thumb_202402151119347521.png"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5PXcc","1G1ve"], "1G1ve", "parcelRequire2041")

//# sourceMappingURL=index.c97e8a59.js.map
