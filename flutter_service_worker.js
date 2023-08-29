'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "88ce79643e31b7ab1fafaf60563e621d",
"index.html": "b9ae532e32a839a15d82bfad37be7550",
"/": "b9ae532e32a839a15d82bfad37be7550",
"main.dart.js": "ef7b99ff8f2f75a69604c3cb3310969a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "63a60809fcb180e9c87c23415451fa46",
".git/config": "18b9564e723929198a817e1c290e57b7",
".git/objects/0c/b720475c9753d089b0e8b62183c27c5e229718": "d47b37ac5f0ebc4319fe8716429dd152",
".git/objects/3e/e424a9c33bed7bd8209e1021c66b65e8bd3147": "ecf096586eea9da27e0ef6653d622855",
".git/objects/04/079d530be983779b1bb6ae381e3f68725fb8a8": "94fa03d5aeacf168e073972ed3f0fc68",
".git/objects/6a/a59b2e97e0332144e1c67beecd041f176e3bc6": "842eca059d29ca6119213ee990b6d2ad",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/c5f17b4c2e28bb4fc76c7c6938459c0b787889": "86b22488561ba6e62dc194ff1441a081",
".git/objects/56/b7e63b346889c0ebbd7075a3e318c41179bf4d": "e6be8ee5df1969ca2dacabd2f341f45a",
".git/objects/05/14d208cc36eda0be5236215ed755e02dd0424c": "0805bf2a69a93ece822cf91351503282",
".git/objects/9d/cc9d1709b033f0b8cfd93fdd4a1e62c62266ea": "e19e26fe671411033ff52248ec23f8ee",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/88de140a412ae65778f572fd46cfbc1b1f9b94": "1815e11432ef40d7521ea28bd8582047",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/d8a383323ca29c5a4dee2aea9fdcf3eb7d36ec": "70df7e2d744ab87a8ef1c4e1a97cc6d5",
".git/objects/bc/292e38d93f31a8aa978caf2ea196f3a7efa134": "591104cbcd5d1892246c05fa7b34ea5a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/30d9d6663daef408e0f86a914e4929b9142253": "80661780b6286ad1d8a0b784dd5d1d56",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b405c395c16bf316b05dd20cf7f9d389f6e0ea": "31d910f979ece9f87836e2b2febf2427",
".git/objects/fc/e4cfb30140e9973376a8439e3e6c9b787cb546": "a12a5ff7641e3c6f7275b10bed72f295",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/41fc1b672873ae048f750430f755173b49c55f": "9fbc0f838bdbbd0b91239a5f7c22072f",
".git/objects/cf/926779908c81e3d4bf7b8fc8c4dc174dfe9d9c": "e12cc8c47058204d81e1a2dcbac2a784",
".git/objects/fe/96d348de5000fae8eb7f32226bc038e5885066": "cc0bcac52df3af6b1635674f8d3429c9",
".git/objects/fb/f147b35388e7eaaa4bbe6c0403772e36d1d712": "6cd67fbbdf7f2cd218fea7c444647ad8",
".git/objects/ed/45ac3f8fda174062e41b76ff8192c66735d6b6": "d1f0452fdb2890928a8d99314aefa509",
".git/objects/ec/648c1e63e4996b611a548031044bf81bbd38ef": "7f106ce690ec59eb4b18969203decbba",
".git/objects/ec/bf215622f7c1c9d8ac4b3a476e5f1ab14c89b7": "e81c1951e06749fa08b6a1a812e31ade",
".git/objects/ec/f360f2fe1b0b41817880660ed6100208868558": "364bcb14a498d12b52c0512a8d4af334",
".git/objects/20/339e57bfe38f2047ae2e4bce5aee26933e4c3f": "163fa5fa5af80505679e846494dec750",
".git/objects/pack/pack-2a2b32d0596a85d14bafec94fb5a6253e665cb7b.pack": "4d4adc1febe8ce7d1cd3320f2a377145",
".git/objects/pack/pack-2a2b32d0596a85d14bafec94fb5a6253e665cb7b.idx": "c9319815306d51ccdffb38501bcf830b",
".git/objects/11/5140758ef4a68b18482d24d5f3c0a055221544": "5e7b0a5f6713de7323fdcc5bb4e3e8b3",
".git/objects/89/2147cb462d189a726be2c75902feaa193c9ad1": "9e3b59634cf38f45ee4fef7bec7160f4",
".git/objects/1f/af3e41c298fdae7a2c319b4e6be1f6352c4fa1": "270f66d492c03221d42530fdd6e8170f",
".git/objects/73/49b523d2d695268b8b665731bdf62541095a70": "2dc271eeb188cdc604020499a4e92bae",
".git/objects/74/f6da0288e7150e92071bee6065bf2b64783005": "778ac325aaf0d2af559018f263e64e43",
".git/objects/17/8bf336117a26ef3ff5725a934c3fbd248e01ca": "c652dcace9f979a60ad96580651a83f4",
".git/objects/8f/052226c6c88e86a39bdec7b5d040584f68b0a3": "dcc6996a2ab0de569c4f4ca74933449b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/1f9cdbaadbc65fe3941269d225c6b28565d663": "9316f5a773d21b1e026c0c6694bf33e9",
".git/objects/7e/c6e81933ea473088a3bfad178f6c077ff0a47a": "33cb7d6908c220be9d9cd19f2d271d65",
".git/objects/4c/94f830190400db28295af4d01f70f96b934953": "6ef0e10a595337245b07358f9946beff",
".git/objects/4c/9f0df2fdac3b82f72ed56b9afc18c7f238dee6": "53cecd509bf79595ad6e46304759ecbe",
".git/objects/86/25989e84987a06dbfae7fa89b41866890a7ed1": "4c97f4999c29f99f403ba1a41e74fc52",
".git/objects/2a/791fdebe5035c7a85d20ebcc34c63c30914c38": "fb572356f62ca70173c52f48a512e639",
".git/objects/2a/16853b0cc4c1b5de172bcfcd324aae1d6d798e": "5ac81fb34e3dfccd2d92c64ba0877916",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/3681c517fe424713793ef72bc58ca7490c0149": "0939901fe3fa4cf498f841a72b23b40d",
".git/objects/54/51342e16f2c13269fd8f37f48b0a95a2c832ea": "fdf40e71f81bf965d71ba8a608cb564d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/3309cb776e04f0f9757a48c97f81d691df1ae8": "9a279b7f6a11a53aae7fb1a6f534398a",
".git/objects/6c/884fb0b246b734ab2e45e5e2ce38d64f76d46d": "4b7d262d983cf6368db1afb049c0e096",
".git/objects/99/13ad41d9c6c05b89c37d88357b3e9d7de31e86": "99c372d5e7b6165d605c711e19ad8d6a",
".git/objects/52/126765c51ff249aed292a24482e5fbf52b41b9": "ff9b2c71df068d3e3e500a9d1938aa6e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/656fac7ece059f3c28d5d1a62babb3ecdb8586": "74ec0285420d257fe8ba26a38a6dc098",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/22a709aecb42871b5f3570b828269030c5d525": "2a7f7cf5d2c1849d3da9cfc75749db6e",
".git/objects/de/500c6aa3c001e8d175b6cb20c9224241338625": "111794245e838a3d26e27ae6b3257f72",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/cfe310fe2f00af55bba3a97065b6bbb1cff7a0": "12bf8ae93e21470595c468fb01690a04",
".git/objects/e1/8155a82d5f40753e5c5cae5c9b4998f5380eab": "87c2003b765b2a55605051ac616568b4",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/3b5bfece5e9796db97e1f9670dc119507a9b0c": "2a0295ec800fbfe6e8b81786255c08e4",
".git/objects/c2/377e9e05dda0b1d3af20c95f3e17bdea639562": "8d25583f4761a272ee2ebf5152b17ccc",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/69f0184d44107e8e4e35e48f07bbca6b0fe472": "df851d007365a5661b1cbbb37cc08c6d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/98242a3a177b26b7d271acc99aa6f380ec244b": "93a90bae20280590178dcf1e5897c266",
".git/objects/83/361106f3861b65c1a82c590ed48d6c8eea7271": "6338ddccae580e81b8c6c590e639f411",
".git/objects/77/86bf87fcae1d7fac7268e64164c0c45dd9e82d": "5cef23f35dae730843df2e5cfdc67f03",
".git/objects/8d/ffed0748286f8d4801f90a9d99432dba83d9e4": "80c4042b79d6ced390d480739b0c4fbe",
".git/objects/49/e8aa384034d9608b69031ac9d6a1e31a5e2b5f": "cab211678cca76a08b5431b76eb7ea0c",
".git/objects/8e/34eb8105f2d4c33c4f00c0f41cdc174186eefa": "ce6c541f0937a757238b2e8ada3c3e0c",
".git/objects/25/9d0d1779a750412af4f30056f54e58688f1c45": "729d11bbac50d6e33f829e0de3064611",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7183b36369821ae5217b157e40e310d",
".git/logs/refs/heads/main": "f7183b36369821ae5217b157e40e310d",
".git/logs/refs/remotes/origin/main": "e42b95087504ed4acaa6d02f1ef13c34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6d580bf9e3cedd182553420e80014527",
".git/refs/remotes/origin/main": "6d580bf9e3cedd182553420e80014527",
".git/index": "28ef76043902b5a2d6d3166e56414f23",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "5d7e3f7ad80eab0dbfbcd856acd38f5f",
"assets/AssetManifest.json": "ff6297cdbf05bdb6d3f61384b93aec48",
"assets/NOTICES": "696b5a0843fba55b737e229627efd4eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "dcad4a431cf830efd73adc406f31782b",
"assets/fonts/MaterialIcons-Regular.otf": "6d179ae4bc6098682eb840ae1fb587fd",
"assets/assets/my_text.vcf": "04156a69d46a99741d6846afaca0ebf0",
"assets/assets/card/my_text.vcf": "04156a69d46a99741d6846afaca0ebf0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
