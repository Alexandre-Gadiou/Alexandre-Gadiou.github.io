/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-40150f599d1bd4314ce1.js"
  },
  {
    "url": "app-fcc16b8808ed46ef2d2e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-cd0a5547d3d56bdb9c85.js"
  },
  {
    "url": "index.html",
    "revision": "ba67ac7c64cfcac56934cad6e6fbc7db"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0bdebf4bcd035236c254e10fdee43385"
  },
  {
    "url": "1.70756eb635f6bc4a2eaa.css"
  },
  {
    "url": "component---src-pages-index-js-76f8c6576803c781406d.js"
  },
  {
    "url": "1-e3952d9d394b52651fa9.js"
  },
  {
    "url": "7-f0c6e0497d243986534c.js"
  },
  {
    "url": "0-f5673311fd3fb58f21ab.js"
  },
  {
    "url": "static/d/677/path---index-6a9-Ke0jPGKfvMvF7JhkcPqjVlqrBX4.json",
    "revision": "56f3ae70bb58906378a9542c61c2420f"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});