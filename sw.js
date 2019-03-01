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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

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
    "url": "webpack-runtime-e41767b84f9954846824.js"
  },
  {
    "url": "app-b6aa48e06f6cea41f2d6.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8ce9547cc2c77ad52482.js"
  },
  {
    "url": "index.html",
    "revision": "bed0e4d9713bc76620972d4a911e82c0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c0987de1f0ee47ff8ade6dc30f828a85"
  },
  {
    "url": "1.d9575149d7142cc18230.css"
  },
  {
    "url": "component---src-pages-index-js-420e28a946f25f4c1b7f.js"
  },
  {
    "url": "1-f54704c5958991fab640.js"
  },
  {
    "url": "8-bd9032af410b0bb0f429.js"
  },
  {
    "url": "0-42eb83739642f9cc7a59.js"
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