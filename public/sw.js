if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/647-c1c62ec88847b355.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/main-ce0f09774259eb47.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/pages/_app-dd582ab8ea090eff.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/pages/checkout-33cc8c2b354986ab.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/pages/index-f888f8ca6c4a4eaa.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/css/3a6b1730b5051d1f.css",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/css/47508f1b259339f6.css",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/css/7a39526128f8dd21.css",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/media/bt_add_to_cart.fb1463ea.svg",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/media/flechita.1c152575.svg",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/media/icon_close.e791344b.png",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/media/icon_menu.b70fc14a.svg",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/media/icon_shopping_cart.665a6046.svg",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/media/logo_yard_sale.ab5a49e4.svg",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/yUeCL7JnIGoObIpsWP1iI/_buildManifest.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/yUeCL7JnIGoObIpsWP1iI/_middlewareManifest.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/_next/static/yUeCL7JnIGoObIpsWP1iI/_ssgManifest.js",revision:"yUeCL7JnIGoObIpsWP1iI"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"0a63d2c5c5807910e2533eadf5a21449"},{url:"/icon-256x256.png",revision:"118bd5e651ed719895c2d87a5178c697"},{url:"/icon-384x384.png",revision:"bed46bc4debfec418215e89a9b1fb702"},{url:"/icon-512x512.png",revision:"1cad7255c110a6cd182c736f723299e9"},{url:"/manifest.json",revision:"eb0dd697d5ed7798fc5ef1c26a004889"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
