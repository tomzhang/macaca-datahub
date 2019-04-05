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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "480705743e216b72e36cbddd49433092"
  },
  {
    "url": "assets/css/0.styles.3aed0fc8.css",
    "revision": "93ea9318b3df3c072605bfb1964f5b3f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.22c1621d.js",
    "revision": "9cec861ee793414645041d5a3f72efa0"
  },
  {
    "url": "assets/js/11.2655f89a.js",
    "revision": "67902ef5af3caa2c9f74c15b3354b342"
  },
  {
    "url": "assets/js/12.9dcd54f2.js",
    "revision": "a7d0e5408ecf58cf5bc48459d8d53d84"
  },
  {
    "url": "assets/js/13.189bf2f3.js",
    "revision": "ae9486b154f486a60cb1413161a4d244"
  },
  {
    "url": "assets/js/14.5c19be37.js",
    "revision": "9f72d308306a3c79fe586ec65ca9e537"
  },
  {
    "url": "assets/js/15.dc9a28b8.js",
    "revision": "a8061219c1d45aec0b31b7b8f5a1e7bb"
  },
  {
    "url": "assets/js/16.9223f188.js",
    "revision": "d6709437857ab4fc72c77dad013dc17e"
  },
  {
    "url": "assets/js/17.af10c78e.js",
    "revision": "065bbd2b802818d4d8d0cc4768d67d09"
  },
  {
    "url": "assets/js/18.6f0e8f52.js",
    "revision": "c925ae7e62747dc43a43e0dc4a09e5ab"
  },
  {
    "url": "assets/js/19.9439e04b.js",
    "revision": "815ea80299300246f15f595e133da09c"
  },
  {
    "url": "assets/js/2.7264a802.js",
    "revision": "4d9b8b5e947b1da22ae164862009652b"
  },
  {
    "url": "assets/js/20.594d43b7.js",
    "revision": "2be894730670d65b1eb4b6838448e963"
  },
  {
    "url": "assets/js/21.50c650af.js",
    "revision": "250bdca2ab923d8fd948b737576a90e4"
  },
  {
    "url": "assets/js/22.71491667.js",
    "revision": "0f3ebcbf0ea8cb073b5f4234cac942f5"
  },
  {
    "url": "assets/js/23.3dc7e6a3.js",
    "revision": "6a787636cad3e287532d124aa9ad16b0"
  },
  {
    "url": "assets/js/24.fa39a016.js",
    "revision": "77c3cc34a439e8d7cef71326582ba756"
  },
  {
    "url": "assets/js/25.e4c283b1.js",
    "revision": "aff22f75ca3fc96d6087a8b78876bada"
  },
  {
    "url": "assets/js/26.6f5dfba0.js",
    "revision": "ce6a47afa6fe69a4db42fb0bfc557649"
  },
  {
    "url": "assets/js/27.179dd499.js",
    "revision": "2bed52cd7a14a1b8e99b94c7ec56732b"
  },
  {
    "url": "assets/js/28.a9dadaf9.js",
    "revision": "582ea5696e00776a56bcbd1594176ef8"
  },
  {
    "url": "assets/js/29.f5a8e332.js",
    "revision": "c1db2d0fb8cddf55917a1c2076828b46"
  },
  {
    "url": "assets/js/3.0f65771a.js",
    "revision": "b469500447de5fbe041b9f169b05e5b8"
  },
  {
    "url": "assets/js/4.c1b23ec5.js",
    "revision": "f2ed7a936a0b9ed35d71845d09794b8a"
  },
  {
    "url": "assets/js/5.950431b1.js",
    "revision": "acab2f868449cc21dfe20e3b1a082f25"
  },
  {
    "url": "assets/js/6.e377d0d4.js",
    "revision": "5b2652cc884453f221f9471ec821aff7"
  },
  {
    "url": "assets/js/7.f8ebb3d5.js",
    "revision": "71b17c6b605f556ed9375704c629f4d9"
  },
  {
    "url": "assets/js/8.7d6e14dc.js",
    "revision": "28bfac9f564d241614ece9939c5a0a24"
  },
  {
    "url": "assets/js/9.8634fffb.js",
    "revision": "8224db90f6e01796c2fa1cd6889c3ba3"
  },
  {
    "url": "assets/js/app.74fef062.js",
    "revision": "7ad93f3de9195b276dcfda841b968988"
  },
  {
    "url": "guide/configuration.html",
    "revision": "e7afb4c58dbd159ca5a9fc3515c03b38"
  },
  {
    "url": "guide/design-concept.html",
    "revision": "affc17d6d8e55ab98ce981eb89075d8a"
  },
  {
    "url": "guide/experiment.html",
    "revision": "b1d3776fbcaa33b56474dfbfa0b6e662"
  },
  {
    "url": "guide/index.html",
    "revision": "dea6f8f91514932efd7347e6d6613195"
  },
  {
    "url": "guide/installation.html",
    "revision": "418906431883db2c3bd4f96c183a9c98"
  },
  {
    "url": "guide/integration.html",
    "revision": "fc86af73040eb3239bde919c518d971e"
  },
  {
    "url": "guide/presentations.html",
    "revision": "d80877fa4a41a0464a5e3360d8e5528a"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "57618f1fabdbbbf637caade8899c16bd"
  },
  {
    "url": "guide/schema-syntax.html",
    "revision": "04c3c9d0fe72126d29b9a5e4a7df178f"
  },
  {
    "url": "guide/swagger.html",
    "revision": "6eb3176acd3e81c12cc77881eea94e1d"
  },
  {
    "url": "guide/webpack-tutorial.html",
    "revision": "de9ef842332f9e8e7ac146c5b9b1643c"
  },
  {
    "url": "guide/with-macaca-test.html",
    "revision": "c6372679f3acc201312f0dc324593555"
  },
  {
    "url": "index.html",
    "revision": "76d33d53927c50bdf9f5e18f174eecfe"
  },
  {
    "url": "logo/logo-color.svg",
    "revision": "ce025e5858229195d4fa7018ee849edd"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "75aa8d8e7cd45cecd75dd8904bb51351"
  },
  {
    "url": "zh/guide/design-concept.html",
    "revision": "6bba9113de5fba353d9cf98b7cd21b53"
  },
  {
    "url": "zh/guide/experiment.html",
    "revision": "a1f08a71a921c5f5875d9dc467c199fa"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b6ae4139e717dd901deccad167476924"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "45ced71f8b57b960cbd7a7e581bea26f"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "6de44ef3369fe92ff9680f56c7d40509"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "21d26ae88ef14bcb8d1321327f8a34d5"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "11238ffa9812dcdff1b0d6e613b6ac6a"
  },
  {
    "url": "zh/guide/schema-syntax.html",
    "revision": "145a5c5658d58a77d47bfe81fd81a0a6"
  },
  {
    "url": "zh/guide/swagger.html",
    "revision": "66fad158ba2f71f311e6cee590fc2e9a"
  },
  {
    "url": "zh/guide/webpack-tutorial.html",
    "revision": "647705ebd746849855af05e95f1527f1"
  },
  {
    "url": "zh/guide/with-macaca-test.html",
    "revision": "763c2f8d8d914e4b033b6793da69ca23"
  },
  {
    "url": "zh/index.html",
    "revision": "0ec4170c8c1c45f3f1ab1b1545d82b70"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
