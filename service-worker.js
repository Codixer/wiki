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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0b637cdbb32ceeb897d4280824445b3d"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "44cf46e8d7fcf99599a3d0ceb8cfd754"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "2f5534f0c11a94318898d8e8e67a7ea9"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.946e56e7.css",
    "revision": "062f6938c1656c75944b05137c08d847"
  },
  {
    "url": "assets/img/detectiongate_setup_1.25bd04bc.png",
    "revision": "25bd04bc742bd3a274b911e27ccbc11d"
  },
  {
    "url": "assets/img/detectiongate_setup_2.ff0bc795.png",
    "revision": "ff0bc7952c0736ce49f89dfcd1afdada"
  },
  {
    "url": "assets/img/levelchecknpc_setup.372c0584.png",
    "revision": "372c0584f661e93786e291d7c481f12e"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_en.f6f6dc72.png",
    "revision": "f6f6dc72c4367f42dedc18e6ae0bdf00"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_nl.4b88bbec.png",
    "revision": "4b88bbec2fd5ba1942a5a2ab61ccb920"
  },
  {
    "url": "assets/img/pinconsole_setup_en.499d9d4c.png",
    "revision": "499d9d4c9288068bad9e11fca195981b"
  },
  {
    "url": "assets/img/pinconsole_setup_nl.539ed98e.png",
    "revision": "539ed98e626f653025f9c5d3ec64e147"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/teleporter_example.63a4bb1e.png",
    "revision": "63a4bb1eb36299bc9a6bd67b71f5e478"
  },
  {
    "url": "assets/img/teleportercmd_help.6d903b2f.png",
    "revision": "6d903b2f0ab151dfc1f034d4c68f7c46"
  },
  {
    "url": "assets/img/teleportercmd_help.915d51ea.png",
    "revision": "915d51ea52c009095db34609cec6e14e"
  },
  {
    "url": "assets/js/10.83528f34.js",
    "revision": "14173daee63eb9062bf973621739d0e7"
  },
  {
    "url": "assets/js/11.b9e5f821.js",
    "revision": "10d9eda8a2e84546c3d0f26f80fd961a"
  },
  {
    "url": "assets/js/12.ffa23b08.js",
    "revision": "540088e15183953be34925259e8a6312"
  },
  {
    "url": "assets/js/13.665b7712.js",
    "revision": "3e1daa64a8ff5123cef9511c2f59d00b"
  },
  {
    "url": "assets/js/14.ad4b9334.js",
    "revision": "402e7e2d8256435577439dde960ebfbf"
  },
  {
    "url": "assets/js/15.d54527e0.js",
    "revision": "e4abc8de294fad371caa00a4591569de"
  },
  {
    "url": "assets/js/16.2060d33f.js",
    "revision": "4bbe2d3e08cfc3b91d977cfcb1d63cbb"
  },
  {
    "url": "assets/js/17.ea372983.js",
    "revision": "5d624424bf89f7074928e03e97b1f670"
  },
  {
    "url": "assets/js/18.124f512c.js",
    "revision": "17c4d451aba6e80e7337a574f515f033"
  },
  {
    "url": "assets/js/19.be606273.js",
    "revision": "33a291bb4ac0a090d1b4311b9433bd20"
  },
  {
    "url": "assets/js/2.95366ad4.js",
    "revision": "8ad57e85e70ad9140a0b138ef30e2fd2"
  },
  {
    "url": "assets/js/20.ab6e21e7.js",
    "revision": "a69881a9ee0d1ea0c81d13d6b30b56e8"
  },
  {
    "url": "assets/js/21.95499412.js",
    "revision": "02349b618c88a28721674e3e81f70a9a"
  },
  {
    "url": "assets/js/22.75eab530.js",
    "revision": "6cbe8e57e0a4ca9e63d15cc379654ffc"
  },
  {
    "url": "assets/js/23.fb29602b.js",
    "revision": "70f37ae1b9eca0c7cc58b30b7381371e"
  },
  {
    "url": "assets/js/24.5f95faa2.js",
    "revision": "c37d31e674ddd3628ce1049025523b0c"
  },
  {
    "url": "assets/js/25.00668f47.js",
    "revision": "daf2e78d7bc77c37671c3d6168a393f1"
  },
  {
    "url": "assets/js/26.2126b2a1.js",
    "revision": "54b8ce6972439ccd3dfbc2f803d1ec31"
  },
  {
    "url": "assets/js/27.0633bb30.js",
    "revision": "32e6ec740f76e5ac7087b69830905ad7"
  },
  {
    "url": "assets/js/28.ffd2d659.js",
    "revision": "517da665cb687c6aa92a3945640a7097"
  },
  {
    "url": "assets/js/29.31eb2d57.js",
    "revision": "5db8027d50b88daf86a863f32945d80f"
  },
  {
    "url": "assets/js/3.b6634b65.js",
    "revision": "541cbc71fb98ff70750257b0c950b3ea"
  },
  {
    "url": "assets/js/30.48689547.js",
    "revision": "896798563630506a2e8bcaab356ee85b"
  },
  {
    "url": "assets/js/31.fafb5c65.js",
    "revision": "226a46c957d6cefd70a3566406ab9ddd"
  },
  {
    "url": "assets/js/4.1e57556b.js",
    "revision": "373568d7091d492c651949e110d1f520"
  },
  {
    "url": "assets/js/5.e11a03e9.js",
    "revision": "06e89a00ca51d0340111c208752f83ab"
  },
  {
    "url": "assets/js/6.a18d36f0.js",
    "revision": "84d1a1f6690dc33c12163dcb7adea38c"
  },
  {
    "url": "assets/js/7.ba1f0471.js",
    "revision": "0cc26e4c3f929abefa688af05882210d"
  },
  {
    "url": "assets/js/8.21607330.js",
    "revision": "9cfdccb5e37a43d350fd46b7a2701c60"
  },
  {
    "url": "assets/js/9.34a771e1.js",
    "revision": "64a532a2ec4780a06dcc65a146b9f8df"
  },
  {
    "url": "assets/js/app.f9ea04b5.js",
    "revision": "bfd4e8c0ce3236ba61bb60e1ce0f728f"
  },
  {
    "url": "bungeecord.html",
    "revision": "9d3a36f11bc4159f45b478a73c56ef8e"
  },
  {
    "url": "commands/admin.html",
    "revision": "4ad16d03c0e8fa0c8150afd358e17451"
  },
  {
    "url": "commands/banking.html",
    "revision": "90c2d249f9406b3a6c98aae7a2d79037"
  },
  {
    "url": "commands/player.html",
    "revision": "7aa8620e159f5d992a19c43f8f022c68"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "7708e1dd35bd752ebc3f9d5d6ffc8c49"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "bd5aa437fb90daffd03a1ca0f13516f0"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "6f25bf377571be51178a4f2a6787d66e"
  },
  {
    "url": "en/commands/player.html",
    "revision": "e496c5eb884183b1bc4cac60a2797423"
  },
  {
    "url": "en/faq.html",
    "revision": "5f76e91587d996ac01b28a30ead5eae9"
  },
  {
    "url": "en/index.html",
    "revision": "3e7b709897053ada664c3c8afb83b500"
  },
  {
    "url": "en/permissions.html",
    "revision": "65384f14df776cd40c080fac1874a560"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "35e348d4c9e6ba8fae1d96a55dfbe1cb"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "433f46a9f060b98861be0bdb8f9be406"
  },
  {
    "url": "en/setup.html",
    "revision": "445f95a3804a3c3b0b302088b85f3534"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "6c2d9455afaa8c5d17284352e3fa011d"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "51b03fd3b60185cc295da232a741fb30"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "d98f8d9a0aae432775a5a0b83f701d7f"
  },
  {
    "url": "faq.html",
    "revision": "d26db0eb8bbee647df1d08f6a796422a"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "00ecb916a548e8be44ec3467e1b66d6b"
  },
  {
    "url": "favicon-194x194.png",
    "revision": "e13db8e5c6827bd04a268948549ca396"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4e9663215a5f70a874e25ebe5e0ca6c7"
  },
  {
    "url": "index.html",
    "revision": "9162b3b008c2b53e9990a7ac5da548c5"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "a4837080efeeaf06ae40e214e744763f"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "07c1b3f42278810020c6bda24ec48e25"
  },
  {
    "url": "permissions.html",
    "revision": "58430bbd2fb313a0f9933b819ba61538"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "f93ec13242f7e7565045315ab611d58c"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "f39f203db197de266ec65f7d282a2a2e"
  },
  {
    "url": "setup.html",
    "revision": "bcff933da519082a7e60cae679e4c406"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "191c45f268fbdbf8522a09cee92dd8d1"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "b92e228b1c7fb3bfccdf3133a1226bb6"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "9504b8f954a280a753679d1a50f7274f"
  }
].concat(self.__precacheManifest || []);
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
