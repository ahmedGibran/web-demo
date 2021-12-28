'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3daa223e44daa89a1858e16114a8f6d3",
"index.html": "9872723d2dd15e1819a2fcd646d6521e",
"/": "9872723d2dd15e1819a2fcd646d6521e",
"main.dart.js": "9c87ad08086d1c591642c96d01abefd4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d7a4410d90b2f9cf8986da76d5f620a7",
".git/config": "cd202552764c62e929f922fb446929a7",
".git/objects/57/77549625e5739aad69d0ac2f33fb4f81be548e": "0873640a805865301cc28c398fb4e868",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/877db03ef600dc5306e335a5da3954f1b2e860": "ae5257c7f50e31e3585ca15916f14f21",
".git/objects/0e/a18e3a0e608f85e5a907502f88f1bf65f5efe6": "0db9843043da338d8c85ab281054f7c7",
".git/objects/33/65fd45835833105bd20ef0b91b99855a938153": "56e2cfc8d9a18dca35edd814d3cf795f",
".git/objects/33/9d3cf4b8ac6d92e88a08d4949fd9a78280f9e6": "1ff2b246e77acca14901ac7bcd6839c0",
".git/objects/9d/22f92eae67696be3a67b6ad441bba3eab66cca": "13c20896184ebd3ebdbaace588739f5c",
".git/objects/d9/0af5003787ccff3057e45a1b31b2675cd98a2f": "b065d1b4d9b395a7c73b00aeca3140c9",
".git/objects/a2/90f052c5ea4e45809fcc051095e79bcab448ca": "09d968a3ca26e0d9ea535257921784cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/3d0dcad002c16ada1194f23f61a255b111ecea": "807397696e8c1b3b0d299ef843780ea4",
".git/objects/ee/dc7d11855a2847a187a69a323a770f754d4f6d": "0175db605d6e5fc8fb07e3b96e9fd9f9",
".git/objects/f2/429f0c0e44f577530e1ec351b3ca5fc2b8deee": "a2bbeff108b8923f274bdcecd3405861",
".git/objects/c1/69d8bcb45e3548e0ce56f9919334f8cd1e9c7a": "7f5310cbf67d439f50eff261cfeeb6cc",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/74/4a769316688c6c0268c815d7de2b7fa91527a7": "602b1dec9a02adaac8b00453cbcafed1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/56ce5c1da939a7600095b80d2752a4b6e50670": "4b3858190e5855c6c5a45bf09ed31035",
".git/objects/6d/9ee7ca686d776f28361b5bc9bad5f2e8aaadc9": "aeb4885edd167b59200886ff65ca99e6",
".git/objects/39/a5c2899a8bc298f4c794da954af5f64c92a4af": "7c19b359008422ad761ee03f218f0f12",
".git/objects/99/b08e056e5df831ad2345360160a6b1f4327a6c": "b825e3f1b2f6fad5e036809446dbcce3",
".git/objects/97/545e8da35617c86f8bc2f858a3df33251e9c87": "71c38a5e0214862e0b1a48bd4f5cb72f",
".git/objects/63/68f171cc5ed19438e16d33555a681245988ae9": "8dd7904bdd453f21ee60576b98707056",
".git/objects/64/de6ec9091859003d93e984baf3e05293610f75": "a550735c711fa4f766613a0107b54082",
".git/objects/ba/e64ecfaf638e00e00b301f17bf7968ab098bd2": "b099a4241ae2fd21f6c3073dc8a847dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/45f4a386c5afaceeb9df0b6b2c4a246e4720e4": "c9dbcffff605face437af9839286a141",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/030da567ffefb2ee0d9b97ac3b00de2d141929": "41da723ce787f13eedce1818e21ef496",
".git/objects/cc/fc852c781103e8d244fefc6ccaf8a7185748e8": "2b0fdf96a77c4987e2ec57d910bd1e53",
".git/objects/cc/d1266d0a60f52a6f27536433b4ac2cb0a31fc5": "a185c69420051f8c91930bafb0eba23f",
".git/objects/e6/9890b0c1a3ea9106a0e5bb10fa283c994aba5a": "38933d6956899a321435d01bebc2e362",
".git/objects/f9/b1c06cb73a3aad563ba60c79b05f06554cbbd9": "57a9d3a2ebf19e1639f07d4c24418620",
".git/objects/f7/676bf0e426374d7e5b7bd7e146162a7ab5ce2e": "326c6cd61b124be88dbc867d66497d3e",
".git/objects/c2/b3277db0e193cf85d2c9fb6edc293ed6cfbc48": "cd3521550be99129d030ef0dbef30354",
".git/objects/e9/96c671786456ebe46a065178a3a1f5614fbeba": "32bec3d862d0d8a2a2eb9e620e0bc3be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/76/a5cca6f50ad670be55411a70c7dc73c5f8c5d5": "c6fda2d245bf36a76ceff23006e9351a",
".git/objects/76/10ff90159708cba81efcd251d6412ddf3e9e91": "f0f9e948d0a2ca00dbd2950627367cd2",
".git/objects/1c/00b81291e17e5c355e806070ef41c3894268c5": "533b00f12e9a3e97a5ee8bf3dd4ff445",
".git/objects/47/71d3b6cb4a287c99e7c6b9e2782841f351b877": "f6a075aaf4f3a0c7923ffc0e55d1f121",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d841d1b7c14d2c6dabec0eec8ede846",
".git/logs/refs/heads/master": "7d841d1b7c14d2c6dabec0eec8ede846",
".git/logs/refs/remotes/origin/master": "38096a358b14fc9690203a6c977621e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "096a2e2199e6ffbaeca8febe09428e88",
".git/refs/remotes/origin/master": "096a2e2199e6ffbaeca8febe09428e88",
".git/index": "76813766992f41a652a8105be61cbf5b",
".git/COMMIT_EDITMSG": "d5947ffc64f66f34066980350d71d8dd",
"assets/AssetManifest.json": "30e132248fb613103e65ad98953e6d6d",
"assets/NOTICES": "b48bd9be818bbadf257dada15252c7d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/home.jpg": "5a40aa49b39b44f0727482438599a1aa",
"assets/assets/images/logo.jpg": "896b4d1e183cd65d57d43c7ce970862f"
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
