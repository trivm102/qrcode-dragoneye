'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "88ce79643e31b7ab1fafaf60563e621d",
"index.html": "a4bb1b0e293c1633e0bc1b3aa55e31fc",
"/": "a4bb1b0e293c1633e0bc1b3aa55e31fc",
"main.dart.js": "b81896e1ebaf97ca69e80998a04a0a1d",
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
".git/objects/69/25adc7abb31ee22b11ec234b74932516dbe875": "e62ae1f508da92b7a16e6623ee37d1b2",
".git/objects/3c/4fea85f94c1e94f1b25db2adc821545fa2eb46": "a318efa1968db292ab0d67ffdb9930ea",
".git/objects/3c/17e2cfa25c67d8b0c4f26dd4a81abed5d27270": "bdc9991f61384030f73c5a0d12550099",
".git/objects/56/c5f17b4c2e28bb4fc76c7c6938459c0b787889": "86b22488561ba6e62dc194ff1441a081",
".git/objects/56/b7e63b346889c0ebbd7075a3e318c41179bf4d": "e6be8ee5df1969ca2dacabd2f341f45a",
".git/objects/93/324aefb122f3bf8c8fbfe71a9fbb48aea25f43": "28c3d438254251debcc96e313bfef889",
".git/objects/0e/5d090ad9d66dae02c36c4eb9932740ffaab644": "af1a689b0882194ffadaa41639a28d69",
".git/objects/60/56e2f42dfa7b915880c75085568e8da22f0d28": "c0fc81f9797f4424973a4b4e1b861be0",
".git/objects/05/873c929cf58aa7de290709b6bb4a7fa74d59fe": "50cb36bcbe1afbd6b4c436b69ce63377",
".git/objects/05/14d208cc36eda0be5236215ed755e02dd0424c": "0805bf2a69a93ece822cf91351503282",
".git/objects/9d/cc9d1709b033f0b8cfd93fdd4a1e62c62266ea": "e19e26fe671411033ff52248ec23f8ee",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/6c2c44fadd60524123409a0031ec9c0dd54f85": "a521022d290ac48fb6cfab8814d8ed43",
".git/objects/9c/7276d3b9c7b464f09ad511571a1046e29c281f": "d7c87d4dd0f68249cf4483a03fc6315d",
".git/objects/02/e39fad633b065a885bd4a0aa5f26014c06fc56": "686270d1013e1a8e4161d4a33656edd2",
".git/objects/b5/a9da0589fd94a3ba2c020c76a1c4bc42c9b6ca": "7166cd4675fe4db6587dae898b495b67",
".git/objects/b5/e4a5ce8015128cc71e3b65af4c27496ea6a909": "9a74209aee0b32056fb556f61cb79f8f",
".git/objects/ac/f574cdbe32d75003ec723e09a7595998e23ade": "08fe36aa7f76ba24cd1d878ef487e63d",
".git/objects/bb/752b17a5c4b6cd8655a3167a170860fdb51bd5": "ba8d73c455bc5d1595a850b51aacc5c3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/700f0537c1daed4c739b0183b71916e9f867bc": "a832203db58a13f5f9e8341e1972824a",
".git/objects/d0/88de140a412ae65778f572fd46cfbc1b1f9b94": "1815e11432ef40d7521ea28bd8582047",
".git/objects/d0/cdbf865e2424c221e692aa2de8e63128f7d9c4": "2f44ed778a25e3f24687fbd583a9fb94",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/bd/e87bfe69e03e04e387e7f975c680c171ea95da": "3a5e8794be5cffda5fea1f469394d457",
".git/objects/d1/f060f32b64426a644a0c0d719dff1a40315aab": "93bc8783042049698ed836a745131329",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/d8a383323ca29c5a4dee2aea9fdcf3eb7d36ec": "70df7e2d744ab87a8ef1c4e1a97cc6d5",
".git/objects/bc/292e38d93f31a8aa978caf2ea196f3a7efa134": "591104cbcd5d1892246c05fa7b34ea5a",
".git/objects/bc/267f54c80cd1e3b6759f5459deabe9e6eaa6ea": "11d62a62d680622eb3de22fa70c5eb2d",
".git/objects/bc/4f7f0a41bd8789540fd457030f68d35a19eec4": "8a076c389abc5f3ea3d37c4355103693",
".git/objects/ae/bab691ef451324200a88eb0111f0e9cd7518b9": "9b8bd5e96c9ef799026a3c92acbcfdee",
".git/objects/ab/732af29d70a55bf7678ca55acee2ead57e1cdc": "e573e115f9631f63aaa6bbd8860446d8",
".git/objects/e5/f299809a8caf8d274620767bb5ebef127ae453": "856993ce276f5b184a0cdb407c52c42f",
".git/objects/e5/9bd0946e14dd5a41cad5bc7aef29b0b7c91aa4": "ea4157ba67fe54c70b1419816460eaac",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/30d9d6663daef408e0f86a914e4929b9142253": "80661780b6286ad1d8a0b784dd5d1d56",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b405c395c16bf316b05dd20cf7f9d389f6e0ea": "31d910f979ece9f87836e2b2febf2427",
".git/objects/fc/e4cfb30140e9973376a8439e3e6c9b787cb546": "a12a5ff7641e3c6f7275b10bed72f295",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/3aa4db2ac728b758b69bd52ce10813b1e21d98": "62e4d7953c510d23aacb696a2c6b7e0d",
".git/objects/f5/05c4309ec02f539b279d8a4568371259a1dfcc": "3a504a60db9393090fff6035e2b39e59",
".git/objects/f5/41fc1b672873ae048f750430f755173b49c55f": "9fbc0f838bdbbd0b91239a5f7c22072f",
".git/objects/cf/926779908c81e3d4bf7b8fc8c4dc174dfe9d9c": "e12cc8c47058204d81e1a2dcbac2a784",
".git/objects/fe/96d348de5000fae8eb7f32226bc038e5885066": "cc0bcac52df3af6b1635674f8d3429c9",
".git/objects/fb/f147b35388e7eaaa4bbe6c0403772e36d1d712": "6cd67fbbdf7f2cd218fea7c444647ad8",
".git/objects/ed/490f2e9b026e449414569ae7ca8f5e3e8a4d30": "6303c84162eb81923713a19b5cad8d45",
".git/objects/ed/45ac3f8fda174062e41b76ff8192c66735d6b6": "d1f0452fdb2890928a8d99314aefa509",
".git/objects/ec/648c1e63e4996b611a548031044bf81bbd38ef": "7f106ce690ec59eb4b18969203decbba",
".git/objects/ec/bf215622f7c1c9d8ac4b3a476e5f1ab14c89b7": "e81c1951e06749fa08b6a1a812e31ade",
".git/objects/ec/275fa6a3ef9ca8b2469754ef6f0c07c30f61a3": "753ce1b6fe903a8287f8ae9e37ab9f3d",
".git/objects/ec/f360f2fe1b0b41817880660ed6100208868558": "364bcb14a498d12b52c0512a8d4af334",
".git/objects/20/339e57bfe38f2047ae2e4bce5aee26933e4c3f": "163fa5fa5af80505679e846494dec750",
".git/objects/pack/pack-2a2b32d0596a85d14bafec94fb5a6253e665cb7b.pack": "4d4adc1febe8ce7d1cd3320f2a377145",
".git/objects/pack/pack-2a2b32d0596a85d14bafec94fb5a6253e665cb7b.idx": "c9319815306d51ccdffb38501bcf830b",
".git/objects/11/5140758ef4a68b18482d24d5f3c0a055221544": "5e7b0a5f6713de7323fdcc5bb4e3e8b3",
".git/objects/29/653a42bd2c3a4eb261978b53cd75747616171f": "155de52ed6b4407313bbfafed2a48eee",
".git/objects/89/403b51e1e14ebacfc17f50ef44f21e1afb9e23": "06b0b06e637f976eb9777d9bb688bf75",
".git/objects/89/2147cb462d189a726be2c75902feaa193c9ad1": "9e3b59634cf38f45ee4fef7bec7160f4",
".git/objects/1f/af3e41c298fdae7a2c319b4e6be1f6352c4fa1": "270f66d492c03221d42530fdd6e8170f",
".git/objects/73/49b523d2d695268b8b665731bdf62541095a70": "2dc271eeb188cdc604020499a4e92bae",
".git/objects/74/49486e25f451c679e3059aa79fed63dd833c5c": "c52193bba28426cbca1c95b49b94e956",
".git/objects/74/f6da0288e7150e92071bee6065bf2b64783005": "778ac325aaf0d2af559018f263e64e43",
".git/objects/17/8bf336117a26ef3ff5725a934c3fbd248e01ca": "c652dcace9f979a60ad96580651a83f4",
".git/objects/8f/052226c6c88e86a39bdec7b5d040584f68b0a3": "dcc6996a2ab0de569c4f4ca74933449b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/1f9cdbaadbc65fe3941269d225c6b28565d663": "9316f5a773d21b1e026c0c6694bf33e9",
".git/objects/7e/c6e81933ea473088a3bfad178f6c077ff0a47a": "33cb7d6908c220be9d9cd19f2d271d65",
".git/objects/7e/6af0a3165ebd15d2d8d2ff065e0f1a9f8df25c": "bce63cb396c18f7f63816073c876c836",
".git/objects/4c/94f830190400db28295af4d01f70f96b934953": "6ef0e10a595337245b07358f9946beff",
".git/objects/4c/9f0df2fdac3b82f72ed56b9afc18c7f238dee6": "53cecd509bf79595ad6e46304759ecbe",
".git/objects/21/780dc6b0120cdec57c0dde1c25e3ebc5e81e08": "0a59ec1e77b83f40eaa5fcfe02004355",
".git/objects/81/8ab18e619cbd7b89456db3f9b5aa1fd53def2c": "9a718a5b0990902320ac4728bc2fbb70",
".git/objects/86/25989e84987a06dbfae7fa89b41866890a7ed1": "4c97f4999c29f99f403ba1a41e74fc52",
".git/objects/44/0b719d37cb565069868c50fa306b17134f30c1": "2c5172fca24efd93829dc2582694d93e",
".git/objects/44/3dc9a7492582687a899ce446f9f4cfde2950c1": "b4c0b7f49e70ad0ba8659610eb4e303d",
".git/objects/2a/791fdebe5035c7a85d20ebcc34c63c30914c38": "fb572356f62ca70173c52f48a512e639",
".git/objects/2a/16853b0cc4c1b5de172bcfcd324aae1d6d798e": "5ac81fb34e3dfccd2d92c64ba0877916",
".git/objects/2f/1fa5502fe4f9e44b8c795bac8480dbc3fa0741": "b35685aec1bf8ef719bd9cec03eef28b",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/691b74a0226490f928e68af03db1aff44e726d": "2dfefdbb8c8f8ad3a9fdf563e349c80e",
".git/objects/6e/911b5a60ba01121ac6821085fafbdc516f92e1": "de8b6a68cfe8b52079b6e3618c2c2e8f",
".git/objects/9a/3681c517fe424713793ef72bc58ca7490c0149": "0939901fe3fa4cf498f841a72b23b40d",
".git/objects/9a/ebb07a6abcd6b37b178334e30df0df237d0e1b": "16ee4d034093ef417c42ee8f4fdfae76",
".git/objects/5c/6b72160a137968ef59f11831899d72b79d863c": "e66c373e1373fce7d4aeae4c39adb144",
".git/objects/31/b2a2a9e8ff76e8ddf0ab3bb3ab9d7f322223a6": "570726fa1a37dc2d33e8342d8b00ff9c",
".git/objects/54/51342e16f2c13269fd8f37f48b0a95a2c832ea": "fdf40e71f81bf965d71ba8a608cb564d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/60189a619d600d19e1e478ec8f32cfd93bddce": "1739da96fe682f16c97734d9c814cd07",
".git/objects/5e/3309cb776e04f0f9757a48c97f81d691df1ae8": "9a279b7f6a11a53aae7fb1a6f534398a",
".git/objects/5b/9583b721b903a0aca205052f9611c9c7a18bbb": "be221b20d8fe8f37ad0186a0270d1bf3",
".git/objects/5b/2559890540edbe1f8e3100166635fd806a4514": "3f812a909c22506c4218f611c9c21b55",
".git/objects/6d/3afa975e0f78a49eb42f6f20a617d1be307256": "497ecef068edc8a1817fa609f0d24693",
".git/objects/6d/f72600a5761f1d676ab0ae8d8b472933dea7c3": "0f3a77d97f86cef82891a332bc5b2884",
".git/objects/6c/884fb0b246b734ab2e45e5e2ce38d64f76d46d": "4b7d262d983cf6368db1afb049c0e096",
".git/objects/99/13ad41d9c6c05b89c37d88357b3e9d7de31e86": "99c372d5e7b6165d605c711e19ad8d6a",
".git/objects/52/126765c51ff249aed292a24482e5fbf52b41b9": "ff9b2c71df068d3e3e500a9d1938aa6e",
".git/objects/63/3278436175e90388f318cde3f0439623e2b68e": "6264206219fb6ccbd21d002effb24035",
".git/objects/bf/a05b1bf6acd0854e09513ce349c5018e412de5": "d645dd9fc407be0541786a39992a711e",
".git/objects/bf/39c81c5ee42841b9d8a066ec7b99fd61144496": "c4816187c3be80d28049d0083603a146",
".git/objects/d3/966f4fedadb041aad2e95d67205763f26e1042": "2542246c2d76ae78d23b3526b0ac8cb3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/590af1ff2cbef6b0d402b03d95112f1e3cf56d": "77fc4843041e25a992d1c5f26a489e9a",
".git/objects/d4/eb5c9be22b4fdfae3640590b81e22615e81673": "767e4d4294af0f96edff964c3a8f3fad",
".git/objects/ba/656fac7ece059f3c28d5d1a62babb3ecdb8586": "74ec0285420d257fe8ba26a38a6dc098",
".git/objects/b1/12a31006923662e85c591e937f1c965b0a0883": "aa7cdbbcec12715d90c3be51ef8810ce",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/cec68025607880be1026c1a8fdfb895345c5c5": "e8ab45462a8e2bdcece5c1d7ae678fc4",
".git/objects/af/c5a71331086aa78f354539fee5f83d5b228932": "5f15e37cdbc208d3d6ee4e00f75314f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/22a709aecb42871b5f3570b828269030c5d525": "2a7f7cf5d2c1849d3da9cfc75749db6e",
".git/objects/de/500c6aa3c001e8d175b6cb20c9224241338625": "111794245e838a3d26e27ae6b3257f72",
".git/objects/a6/b0abc0449fecc2ec83a1f47a9699f48500702f": "e6ce08d253120b8140bafb6bf35bdc8c",
".git/objects/a6/bd8335a19666db0a08392e4fbe1bfb7e79d64c": "0b8b664aa79590051dd931335615afbf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/68fd6f1e49b1bf150f714c7cab1f23b9daaab1": "a389a73220a8f3a747bd09dc7cd7ed1a",
".git/objects/c4/24b7e7bd8645dd4d5a02321ba00213de0b5549": "845d711a59196b1f37d4c3c2f71a2ec4",
".git/objects/c4/77e3cd8a8681ed53d15c0a55bdda8ff0f3cf1e": "4461929d6b0accf8a50212df50885e45",
".git/objects/ea/cfe310fe2f00af55bba3a97065b6bbb1cff7a0": "12bf8ae93e21470595c468fb01690a04",
".git/objects/e1/8155a82d5f40753e5c5cae5c9b4998f5380eab": "87c2003b765b2a55605051ac616568b4",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/3b5bfece5e9796db97e1f9670dc119507a9b0c": "2a0295ec800fbfe6e8b81786255c08e4",
".git/objects/f7/71b6e4360dd34217a2cdf5e64475141124be79": "7c3bcf1ff75b9a7ade7ff2ec6bd48a6f",
".git/objects/c5/89c5c1e2822e4deaffe3f7e3ad90ef3efc2569": "88f0d413471e03d66b11f26c5e96719c",
".git/objects/c2/377e9e05dda0b1d3af20c95f3e17bdea639562": "8d25583f4761a272ee2ebf5152b17ccc",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/69f0184d44107e8e4e35e48f07bbca6b0fe472": "df851d007365a5661b1cbbb37cc08c6d",
".git/objects/e7/a190a0bcbb6b0a98954f81c9468f8215d1b086": "f56f03cf66f3ff4a20a7590d122305a7",
".git/objects/e7/e35268f4f6814bf352da10ad9d6e8c7c25a84a": "470e1e54a7fc02d3040393c391897622",
".git/objects/cb/cf630a9029ff91be0a2d498383234abfc3b19d": "c15782997ddb1d5b53ed304a933f70ad",
".git/objects/cb/4455e87471fa7e192025bd24851bc558300668": "0d812053548745b90cfca7d4941c0378",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/a2414d188d651db2db6dc62152fd6109b465c6": "e5dbac34e9b11443fab8403b5866ff72",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/98242a3a177b26b7d271acc99aa6f380ec244b": "93a90bae20280590178dcf1e5897c266",
".git/objects/83/361106f3861b65c1a82c590ed48d6c8eea7271": "6338ddccae580e81b8c6c590e639f411",
".git/objects/77/86bf87fcae1d7fac7268e64164c0c45dd9e82d": "5cef23f35dae730843df2e5cfdc67f03",
".git/objects/48/b3b83752fd2b1a2d960381ce7b6f3eacb72e7d": "f73c4faaace9c6613a5b830b133f2536",
".git/objects/84/bde9a1790ff971d90b66afb8801ec2af437591": "188945d725d2ac3a8afa022b02c0863b",
".git/objects/24/15a2e1e3ade0c872bcf68b58ba0686a24b8e4c": "4c8d2db18c82c15e8673aa3f9f5895f2",
".git/objects/8d/ffed0748286f8d4801f90a9d99432dba83d9e4": "80c4042b79d6ced390d480739b0c4fbe",
".git/objects/15/6713eab9378bfd58c604aa163f6f251bde5738": "35c8328038421a12378d666d0be7be05",
".git/objects/8c/3c4d0200f161d99ed05fadd1e8c50ee9eac7e5": "8a3fe94798beeb28b573234a50c25aeb",
".git/objects/85/f45ccc69fbe4ffa48b81cacbf6596d5ed26c3e": "1e9efe650726f48bb0651253d84408e0",
".git/objects/1c/8425f93f826bbb4524910aea0ba84dcb1964c5": "f806314bc8f02007f8391f1555eb7f4d",
".git/objects/82/faa5c002b77fc7f5261f838918baf0763e85ec": "4e8169e12ce1b68877692869de2b3bf3",
".git/objects/49/e8aa384034d9608b69031ac9d6a1e31a5e2b5f": "cab211678cca76a08b5431b76eb7ea0c",
".git/objects/47/51894a70702aa6e62aa2195e1330a17412b0f7": "996996a3ddd448264f6a7ee558d15e35",
".git/objects/13/980554b34510a828cdbf0f120f882e1e86783f": "7799c366845e28bb5b1f3e7dfec45581",
".git/objects/13/9d6854761528bc2439e5ddf2d1725b9b7d433b": "4120fa35a5df2ee20dd9443055b0bcf0",
".git/objects/8e/a79954dea602a6889f9917c0c8885535dd97f4": "71fd81ee2b0bd15c004cbb82a2285e3e",
".git/objects/8e/34eb8105f2d4c33c4f00c0f41cdc174186eefa": "ce6c541f0937a757238b2e8ada3c3e0c",
".git/objects/25/75d7d829fabecdabb15bc34c6cd8595238351e": "c184c2d184ddb179d37ecf9818b46da5",
".git/objects/25/8d721f80f17e5715e08e9d1384d40717103357": "28427bad624c55fe8f6ed1e7a65a63e6",
".git/objects/25/9d0d1779a750412af4f30056f54e58688f1c45": "729d11bbac50d6e33f829e0de3064611",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06ad385010ad2956373a68782269cb48",
".git/logs/refs/heads/main": "06ad385010ad2956373a68782269cb48",
".git/logs/refs/remotes/origin/main": "87414f9fa8052420599e3e1e335b095e",
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
".git/refs/heads/main": "626554202d46c049772b3c3f14c00637",
".git/refs/remotes/origin/main": "626554202d46c049772b3c3f14c00637",
".git/index": "4e2283f4225255d2de8ff2567e6c32a3",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "9b93cfcff57989c4cd7b5aa3a2a5f56b",
"assets/AssetManifest.json": "ff6297cdbf05bdb6d3f61384b93aec48",
"assets/NOTICES": "dd78330eebd0e9251844f0f75d2e4622",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "dcad4a431cf830efd73adc406f31782b",
"assets/fonts/MaterialIcons-Regular.otf": "0e8d87b0b3c96282bd5311227154dd6e",
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
