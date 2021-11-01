if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,s,n)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return i;case"module":return o;default:return e(a)}}))).then((e=>{const a=n(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Mandelbrot-Visualization/_next/static/chunks/831-d950f4c163c520ef72d1.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/chunks/main-e7ed1d4dd564f9457dce.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/chunks/pages/_app-b56bec81e966bbdb77b6.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/chunks/pages/index-e2eafc15d510262bfbcc.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/chunks/webpack-48e876516ea92ba8ea81.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/css/38b463ffb6318291e9d9.css",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/uNY-4ybI0uaExuzZroh2k/_buildManifest.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/_next/static/uNY-4ybI0uaExuzZroh2k/_ssgManifest.js",revision:"uNY-4ybI0uaExuzZroh2k"},{url:"/Mandelbrot-Visualization/favicon.ico",revision:"589deaecf21084f0149441db02c718d8"},{url:"/Mandelbrot-Visualization/favicon.svg",revision:"44c748cc6ef10f4e315076b1c4d76bac"},{url:"/Mandelbrot-Visualization/gradient.png",revision:"6272e7da83af90b80f06d1e37ef50dc7"},{url:"/Mandelbrot-Visualization/icons/apple-icon-180.png",revision:"019c6084413f876682c4e6b2281a4f60"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1125-2436.jpg",revision:"16f0943d16edab02cbc0944ef3ca02ff"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1136-640.jpg",revision:"0856bdddde3112f6b7e7c4ac5ade60ce"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1170-2532.jpg",revision:"a80776a775976d6069be4626915b6ebd"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1242-2208.jpg",revision:"972b3e56d2cc570e60a3343f94a187f1"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1242-2688.jpg",revision:"06c250f3373518a842ffa4c569e40661"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1284-2778.jpg",revision:"bc18f73b5349e539644682ec92aaea33"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1334-750.jpg",revision:"94ebd0c82b09e1f1b93c82af19d3151a"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1536-2048.jpg",revision:"adaf03d38792a47fa1e1dcb5e9e193b4"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1620-2160.jpg",revision:"7ffc0ddee1810bc7dacb65d4d7787433"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1668-2224.jpg",revision:"a3f4bfb7fc753a91c231391010b0c4ed"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1668-2388.jpg",revision:"09b3ce2c0d9acde34da77b34ffe4234e"},{url:"/Mandelbrot-Visualization/icons/apple-splash-1792-828.jpg",revision:"6316ea1d38f76655f5d08e414e88dca3"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2048-1536.jpg",revision:"73043c6b44407a080541ac6e4bffb617"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2048-2732.jpg",revision:"f2dedbdc7504d63869f1541eb81c2c1c"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2160-1620.jpg",revision:"787a6e6ec5f32ca478e731aac3b34633"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2208-1242.jpg",revision:"ba1b0b2ef535c4c263ba852deedd037c"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2224-1668.jpg",revision:"f1fc2d615d2bb60637854edb96d65cd9"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2388-1668.jpg",revision:"90223766de1a0845b4838fe95b425abf"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2436-1125.jpg",revision:"269477f17782becdfea80f9885f211bc"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2532-1170.jpg",revision:"049878403b4aa69f969529f1e5f2f306"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2688-1242.jpg",revision:"e43aa60516dc04371cb8896de2a13b0d"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2732-2048.jpg",revision:"ff6e5d73484a9e9df4b1ae5891b733b8"},{url:"/Mandelbrot-Visualization/icons/apple-splash-2778-1284.jpg",revision:"1915dfe5434eab4e6967bf21d41ccb81"},{url:"/Mandelbrot-Visualization/icons/apple-splash-640-1136.jpg",revision:"3784a4bf38b16537904006298148c25c"},{url:"/Mandelbrot-Visualization/icons/apple-splash-750-1334.jpg",revision:"076244734a0271a5b0e350cd9c7feb8e"},{url:"/Mandelbrot-Visualization/icons/apple-splash-828-1792.jpg",revision:"820696cae3a4e3c504c9fee4318da283"},{url:"/Mandelbrot-Visualization/icons/manifest-icon-192.maskable.png",revision:"6fd5dc5003e2ce0ee9f23c40b301b7c6"},{url:"/Mandelbrot-Visualization/icons/manifest-icon-512.maskable.png",revision:"eb1824352b4991c2aced51bfbd6aa5a4"},{url:"/Mandelbrot-Visualization/manifest.json",revision:"2869b6494c1580cd930a8777e5fa7d02"},{url:"/Mandelbrot-Visualization/robots.txt",revision:"1799c5f8045ecce8a78b9b47ac70a887"},{url:"/Mandelbrot-Visualization/screenshot.png",revision:"fb189fc2b7966cc399e499301f72aa47"},{url:"/Mandelbrot-Visualization/shaders/mandelbrot.frag",revision:"bee470f034a9401985fa20b30cec7f1e"},{url:"/Mandelbrot-Visualization/shaders/mandelbrot.vert",revision:"99a6fcafc97ea35721e0bc75e6caa327"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/Mandelbrot-Visualization",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
