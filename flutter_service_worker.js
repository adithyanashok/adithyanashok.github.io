'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "af89c73acf7f9538bcb88fe63c9490fe",
"/": "af89c73acf7f9538bcb88fe63c9490fe",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a77decd8a00f92a74a180843a4950fae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "41a89625775d93b08aef381d5b88ca31",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"assets/AssetManifest.json": "0bf0bbc8715918294499fb3673736087",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "83986402585c077c7880094cc2a5d719",
"assets/AssetManifest.bin": "e6e3fd1f5b9365cd02842ce786484e14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/google.png": "388178b1b2597c254358a9a9e9758f18",
"assets/assets/images/Facebook-f_Logo-Blue-Logo.wine.svg": "38d058fe413225ce5f6fd89017c0a189",
"assets/assets/images/fb.png": "64445f422e675d6139513b35f89e7824",
"assets/assets/images/google.com.png": "5539e6474a763533e49c91ad094fbeb1",
"main.dart.js": "e7cc51cf0991c26add5af8a1f00c4ac7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/refs/heads/master": "5b199054c93d21a2e511108d334b5915",
".git/refs/remotes/origin/master": "5b199054c93d21a2e511108d334b5915",
".git/logs/HEAD": "0da64c3bde768dd3025f31ece486bde7",
".git/logs/refs/heads/master": "0da64c3bde768dd3025f31ece486bde7",
".git/logs/refs/remotes/origin/master": "d72d00eb6e4925288a13ca56b7d7e8bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "beba493b95ee830eb55d230f5571eb28",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/91/1d9a534a98f05c1b2c709abc90749f042f97c9": "cf892399ee533163a1f9d91efb8acd10",
".git/objects/c0/7103d0c7d8c0bafea3d7832e4b1956df625df7": "72158bd6b7d6bbecadc770711ebe549e",
".git/objects/07/f17251e07b03762d548a0e13aac9477c95403e": "0dc6281f0c1dc3cdddc7662f2dceedef",
".git/objects/e3/7999b2e4b95b9b7a8765ed7b3bed113a0c1e6d": "1930fbe784e803d02bee2711ed53e489",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/aa/7010156279cfd08ca7e6acbf19d5e743e16b54": "1378be3fb12a9f5f2e1e701b37a27141",
".git/objects/44/18905eaf349c410322c933f8214c44ee418515": "c07afa31a186d310efea4e73fa2c5734",
".git/objects/78/eea7faaf577a275c746182962269e7653b7fc2": "74f8437d6038965f72df91a02375e6c9",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/a6/a86cbba712e452b5b1d8a554a657e94ab8ed91": "2d574005ca176a57984390455d045c68",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/ed/c09d7a2814111eb60af34fa36fd380e118cc9b": "bcbb9ddb4acb2a17497b1575d5be7beb",
".git/objects/e9/ec795ef3032ea2c3ab6375edfe86a5e5234e45": "378b13d7e715c2a741400465069f6d05",
".git/objects/b7/eedc46d3d46221ac3133051984c8d9b9076c5a": "59dea60b0f410856a7e0efc3b333e0e8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/77/dbb9250239c22ceba4a4a9c9818a586148de59": "bc8f805861b08d06c39c753e8853a562",
".git/objects/5d/aa8517f6891877c223c0801432ed56e5420b66": "9aedf9e3887dbdb8b318eee79ffb018f",
".git/objects/86/5dc0ef27dbc72e490e3d91086d74ad7cfdb2d7": "5ca6b240d900626d056bda099c0029f7",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/96/6d86e68c13d6ed177a264bd9f7212d410c03af": "1ba4cb9f24ab352d0d846a015f6f831a",
".git/objects/81/264da6ea4d74e2d95c173f6cb0da988e396f6c": "f01e246c58dab3b2d449f5751c91d455",
".git/objects/05/aa8f5e9810a590cf976bfe9ce23967334bc25d": "fe5733ebf74f7b3f5a13f0de05bdf41a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/427a08bceadadfab26b0d56b23653a34f0baa8": "df0c8e4b331e74830f91255bef588b5f",
".git/objects/df/004797b1f4e5ee7d6bf287af8bc26b12616372": "639de9707d0d17aaa79a92d6b0dcec27",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/1d/0eaedd34f7e97b5dc159139ca59d8a654b4eb6": "e971abb2cdb73bdde1deb6ebca0c2129",
".git/objects/b3/d2f4db1bf5b5dcde243e3d5cebe907536b431e": "8fab10b50e6d8c4a4101e3edffa71108",
".git/objects/4d/ce1aed0d94a27b92f1403bdba3fd02188610b3": "cf0cec3f9d4a039432614f5371836cea",
".git/objects/f6/2dd0896d26adb4ede6f42b29ece8b9d06663c4": "6137e8613b1353b0fdf6785e2c01a004",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/6f/12c4bd0bf8497af5eacf9034678d3e4be523f0": "577d469094606da8d03fefdf8913ea09",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/dc89a3b0aee0b0dae98bc60b9706f9c2d952ce": "f633a7f8f3f2e8591e09e5faa47bd17c",
".git/objects/2a/0d10df865d1a1eae4a223d027de50f4b966220": "d9233de72c17378be6300267626161ab",
".git/objects/6e/e5c0e797a7641b0fd65d4b06582554db03d65f": "3f7afc90353c3ea5aa93b73a11809cf3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a3/56c95db9158fc89c90b76e530c3111601f0629": "6a9985dbb83e17b223529d865f9f7c4d",
".git/objects/b1/d4ca84ead00e51f9e2cbcb2038cb1e5e6b2c01": "a84789a6acf71ab02cc7792198dd54a8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/eb/a7a5ec4a4780f7e45e7b26a2c6888135540519": "eaa90d923d0658ef2dcf1852ca94d3cd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d4/bf98f42cd027146468e478292bc8a496e9e5b5": "7769ffdebcc1c52e263f5f31a014eb0b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/be/15ddfeaf22b779b44b273dfcecfd12a17b5a88": "d068b0638d1c6ec8ffb43e407129176b",
".git/objects/70/d5eb9c4a300373f3a63ad5f7137fedf63ddaa1": "09e334425a9b17e9d48b0e6b16476f3c",
".git/objects/85/175dfbe54c2d4513733c58f45b0295f08dcbdb": "8d55157b0d2f5cbf0fda028a07ec807e",
".git/objects/42/b3b408d5205898a349353d577469f8df8b78ee": "2e463364a5d378e71eb1905fce46a933",
".git/objects/fd/c4f0f577007b201ba3e6ef5be470c6d20e8692": "925faf62132a6d8dc0607f639526402e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/e6/5b8ab54e4519defae47ecadff940552a0697e3": "638a3e0e0bce6d85ab7632f3cb3fd1ee",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/8c/705796a26106cc9f1ae23e1bdefa43151b0795": "f279e135c1026811414e92f97490a16b",
".git/objects/f8/2c2b6ebdfb7baa49249ef0e8182d6a4e69c851": "bae23efd15d88e2bdb099ac0d7c45db4",
".git/objects/f8/eb9eb1f44ae3813fa4c43e5af00c34e60803e5": "492b0a950feb48229dc3bd00def44d4d",
".git/objects/a7/7f649872d997570f2b08c3b9794b3af73f3dfc": "3e7440f4b5c22607226ee19b431f7b09",
".git/objects/c2/4d6ba6c7066afe3016a3296ac00be524b5aa01": "f36d4f21241266cfe866959a38ac47b3",
".git/config": "4c003ae26a1b3899e663ed1fc1dddf79",
".git/COMMIT_EDITMSG": "fb12eaccebfa07ddd15f920bb8742030",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
