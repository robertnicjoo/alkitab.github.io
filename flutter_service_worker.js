'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "80b290080bcec26c4b2bdee2eebe9179",
".git/config": "b27130f5be456f2139f655a5f11089bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "04136f6d2935983b3bc8ac23571f641d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f79b0ef0aa45765325fb7934c3ab7ae0",
".git/logs/refs/heads/main": "f79b0ef0aa45765325fb7934c3ab7ae0",
".git/logs/refs/remotes/origin/HEAD": "719872e33fddaaed048d385d89e9d9ea",
".git/logs/refs/remotes/origin/main": "e2ec7f91b41dbc409a8636580838f5cd",
".git/objects/02/e91835525841482d70605cde5837a228befd9c": "a43d39e6b760b8f5dad93ba1d0ab76c5",
".git/objects/03/7475e548c06a4961cb6a1969ae69e9f8974b4d": "ef8be23eb16cc7b600ba88b3b2164886",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/1f6f087c68ecaca37fbbc3edffa27b2e8d2618": "a02f25069f8436971703f8946ab7c404",
".git/objects/1d/7208289ca3aba766ec69a54745cc220a629303": "9f1b12d421e3599e45bc021598f31b17",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/0155cb649366f6f16bf3ab7ebb0dfec90cffc8": "4a1f57a5459457a6a39d71851569d485",
".git/objects/36/15bb88c79c81c82b7f7a3a6836f64362a0f1dc": "547258f3440757609948e3def2ab48f0",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/4a/42bca22799dcf6a8daa05c265639fbe7ced72a": "1ecad81a108ac7859311eb4ad7d6c5ef",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/a2b8f65412c717d709a53a6b1587bf0902cc9e": "28e2f9e7c8f2955f0e158a687b08619c",
".git/objects/55/865bcbc629eeb14674ee871d66dd1a6c31cca6": "d9e23f12eca15c7ea091f81b6369df14",
".git/objects/57/760881e6f9f35fe439d05ad53ac12f50fbdc17": "6eb5200c292760ff9c2791ecf9629060",
".git/objects/61/7e36b5ef3b719a37256845fbc43d2dac57a442": "669d86776e39c3aa9b69499a7625b332",
".git/objects/66/0dfff2369e00e907f3b42d53a3066fdc5e29ce": "6b2d9e769729d9e3ce443a852447e6a4",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/2b048c2c413f44026fe2ff1dda14fc2ae0b20c": "c81385dd7ca87a2c76acee2d832972ac",
".git/objects/9c/f2c446af5c4e8c629207d589cbd63f594c27cd": "5b7d8756b93c5aae668ec6fe59a06931",
".git/objects/ac/bbbfa52eb9e2620a9587f4860f079e338c4aa7": "5138f275d41a0f9212bfb4f051bd5899",
".git/objects/b1/ae5c8165c619cda597ef14259e724fb9400e26": "3643c3431b09efd1ed4518c4c4dbab39",
".git/objects/b1/b275bbb1e209a566237a069f66fc9343ca0802": "fb57eca4e599f4e4e134fd0b5b204253",
".git/objects/b6/2e1029b89808fd2146accb086769184dab3d0d": "c995d6269ce07c0cc035818de691863d",
".git/objects/bc/c653d2f85bb5be4398cdb013f3c7527aa28655": "aff1384b82a8a32c222922d25ebf5e00",
".git/objects/be/3c54186c181160507e1706dffef1f9169b8a77": "329a859759e0b1d095cf51b3bf673245",
".git/objects/d5/ee171e777156e00237d65df9a19e17b68e7311": "02d4abb90763b457dfdaa873ae9ce140",
".git/objects/e0/f77333d564117a92722fd7113133c43c20207b": "a2a76f4e960f0c7d6322d451246d4832",
".git/objects/e8/eb1ad6b263bd3923645703ffff5190e5fdb1cc": "8a1ad2b1a80f174947115387067daea9",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ec/8cc02deccbf4ca141eb0531a14b72496272822": "e1add9dc0d29067162105765f68396ef",
".git/objects/ec/d9e2ca9d678312708ce32cad92376eb4227dbb": "020d07c710a689207dc777c16fae85c2",
".git/objects/ed/6b7fa10f6bc9c80964ca13f7b2268c7f50940f": "8dda0e7e5beb4b9854ff715c63c0e9a5",
".git/objects/f6/420d8407a9891cd71c57767be3c5b554ccce3a": "38dc845b3becdb1c54b6db7f979dad8b",
".git/objects/fa/4c4f2695aa87f2e51a3a899c2b810e1aab769f": "d938e9fe754f78e4cead13c05bef964e",
".git/objects/ff/093fb1306bf0bd0d4bd2199b13409b9d74163e": "7d75aa869d88f324e12bfc33fbce0953",
".git/objects/pack/pack-667f5895620497ec800f07021f4ffb27041eea1b.idx": "192373b89961f7805f49fd3a82f885f6",
".git/objects/pack/pack-667f5895620497ec800f07021f4ffb27041eea1b.pack": "70d33f6db38048a11953923d0babf610",
".git/packed-refs": "189aa54f92e077a7772759a2122a07b0",
".git/refs/heads/main": "df2f5563f2161f2bec1b6a822f22ec6d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "df2f5563f2161f2bec1b6a822f22ec6d",
"assets/AssetManifest.json": "569cd699e86a64b75eb2440d586f9b94",
"assets/assets/db/id.json": "f6434594d15d63953daa2ceec54ae2b5",
"assets/assets/db/id.realm": "270e555c13388913c3cd8fd485512765",
"assets/assets/db/id.realm.lock": "ab7ee06f196e12259e12728126550914",
"assets/assets/db/verse_of_day.json": "8d00b5582d87111697ba46faf228e6f1",
"assets/assets/db/verse_of_day.realm": "2c16e9e97953133566951dd86d7384c3",
"assets/assets/db/verse_of_day.realm.lock": "a07d893a3b3932a5f1e611c42026cf3a",
"assets/assets/icons/logo.png": "d002b53a947219a360615322d0cf4791",
"assets/assets/lists/a-player-en.json": "73909941431dec0310f5d9ac4cf60e02",
"assets/assets/lists/a-player-fa.json": "624c2100e072fa6587606d25b2f66dce",
"assets/assets/lists/a-player-id.json": "e61be90b93b68b730cb657ea5a714ba6",
"assets/assets/lists/v-player.json": "598540f9b388269886b3237d69d4d7ee",
"assets/assets/videos/butterfly.mp4": "7b38560e7dbf868e58e29984509f2f96",
"assets/FontManifest.json": "6db3ffbfa7e813cb603d14cc57248605",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Vazirmatn-Regular.ttf": "1d41a66ffba3a77c5b64630d5cfe44f5",
"assets/NOTICES": "25b74b11cba8b949c315333f06196125",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "241a845f890953caa92355d3205773fd",
"icons/Icon-512.png": "d002b53a947219a360615322d0cf4791",
"icons/Icon-maskable-192.png": "d9faaebd1e65189b126c26c56fb5a3a5",
"icons/Icon-maskable-512.png": "af4a2fe481b3c21f889e8d66be9cd417",
"index.html": "5ed4e8a79029800ccdd1f4d252740ec6",
"/": "5ed4e8a79029800ccdd1f4d252740ec6",
"main.dart.js": "b37e36ec8f4f92e8057d88db699a77bf",
"manifest.json": "5eea8006eab24f6b6fe5c303585ac075",
"version.json": "45d4a2f156662520c6fa2e85a28cf840"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
