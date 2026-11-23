// ============================================================
// Buddhist Era PWA — Service Worker
// Offline Support + Automatic Cache Update + Lie-Fi / Zero-Data Fix
// ------------------------------------------------------------
// ★ අනුවාද අංක අතින් වෙනස් කිරීමට අවශ්‍ය නැත — සියල්ල ස්වයංක්‍රීයයි ★
//   index.html / script.js / calculation.js ආදී ගොනුවල ?v=... අවශ්‍ය නැත (තිබුණත් නොසලකයි).
//
//   • GitHub වෙත ගොනු upload කළ විට (main), GitHub Action එකක් (.github/workflows/sw-hashes.yml)
//     එක් එක් ගොනුවේ අන්තර්ගතයෙන් hash එකක් සාදා පහත ලැයිස්තුවේ ඉබේම දමයි.
//     අලුත් ගොනු ලැයිස්තුවට එක් කරයි, ඉවත් කළ ගොනු ලැයිස්තුවෙන් ඉවත් කරයි.
//   • update එකේදී බාගත වන්නේ අන්තර්ගතය ඇත්තටම වෙනස් වූ ගොනු පමණි;
//     අනෙක් ගොනු පැරණි cache එකෙන් පිටපත් කරයි (network භාවිතයක් නැත).
//   • වෙනස් වූ ගොනු HTTP cache මඟහැර ({cache:'reload'}) සර්වරයෙන්ම අලුතින් ගනී.
//   • නව cache එක සම්පූර්ණ වූ පසු පමණක් මාරු වේ → පිටුව එක් වරක් reload වේ
//     (අලුත් HTML + පැරණි JS වැනි මිශ්‍ර තත්ත්වයක් නැත).
//   • ගොනුවක් CORE / OPTIONAL / LAZY අතර මාරු කිරීමට: එහි පේළිය අදාළ ලැයිස්තුවට ගෙන යන්න (hash එක ඉබේම).
//   • සියලු ගොනු එකවර අලුතින් බාගත කිරීමට අවශ්‍ය නම් පමණක්: RESET අංකය +1 කරන්න.
// ============================================================

const RESET = 1;

// අනිවාර්ය ගොනු — එකක් හෝ නොලැබුණොත් update එක අත්හැර පැරණි අනුවාදයම දිගටම ක්‍රියා කරයි
const CORE_FILES = {
  '/': 'fcb052843e',                              // index.html
  '/manifest.json': '469ab2e27b',
  '/style.css': '3c7a2bb320',
  '/theme.css': '448ec1646a',
  '/theme.js': '9ffb92099c',
  '/astronomy.browser.min.js': 'd1b3ab4b86',
  '/mm-poya.js': 'f67d310aa6',
  '/script.js': 'b57494bbff',
  '/calculation.js': 'cbf6fd8a69',
  '/info.js': '046fd2a4f8',
  '/chanting.js': 'e845323596',
  '/visuals3d.js': 'b1aa31c929',
  '/sunpage.js': 'b5be8ccb68',
  '/uposatha.js': '98811edd85',
  '/calendar.js': '39f5bc2d85'
};

// අමතර ගොනු — install එකේදී ගනී, නොලැබුණත් update එක නවතින්නේ නැත
const OPTIONAL_FILES = {
  '/patthana-data.js': '7093f05955',
  '/pirith-data.js': '4883d8c564',
  '/buddha-recitation.js': 'c680957a85',
  '/buddha-vandana-data.js': '88a1586430',
  '/satipatthana-data.js': '17cf3675fd',
  '/patimokkha-data.js': '2f271186af',
  '/three.min.js': 'a9d81ea63f',
  '/moon.jpg': 'b246064f21',
  '/bg/waves.webp': 'c471013b4f',
  '/bg/flowers.webp': '4b29026c8c',
  '/bg/gold.webp': 'ea924d8f19',
  '/bg/gold-lines.svg': '54d8513b70',
  '/bg/pearl.webp': 'be0ec5e73c',
  '/bg/damask.webp': 'fd77ed6a39',
  '/bg/swirl.webp': '6644916590',
  '/icon-192x192.png': '623c36ba56',
  '/icon-512x512.png': '31e4bc20f0',
  '/icon-32×32.png': 'd74438ed59',
  // සිංහල / ඉංග්‍රීසි පෙරනිමි අකුරු — install එකේදීම (පළමු offline භාවිතයටත්)
  '/fonts/NotoSans-Latin.woff2': '9774902da9',
  '/fonts/NotoSerif-Latin.woff2': '6fbce23951',
  '/fonts/NotoSansSinhala.woff2': 'ae4880f390',
  '/fonts/NotoSerifSinhala.woff2': '3ab31d7d4b'
};

// හින්දි / බුරුම / තායි / චීන තෝරාගත් අයට පමණක් — පළමු භාවිතයේදී cache වේ.
// update එකේදී: hash එක නොවෙනස් නම් පිටපත් කරයි; වෙනස් නම් (එය භාවිත කළ අයට පමණක්) අලුතින් ගනී.
const LAZY_FILES = {
  '/pali-script.js': '6f33d6f815',
  '/lang/hi.js': '1e5c5ebe26',
  '/lang/my.js': 'e2b659f4bc',
  '/lang/th.js': 'd08de20e07',
  '/lang/hi-calc.js': '39cf96b451',
  '/lang/my-calc.js': '28da8427e6',
  '/lang/th-calc.js': '7e3a144cbc',
  '/lang/zh-calc.js': '72607c06a9',
  '/lang/zh.js': '2aeac89442',
  '/fonts/AbhayaUni-Variable.woff2': '07a454c27a',
  '/fonts/OFL.txt': '72c71eb683',
  '/fonts/NotoSansDevanagari.woff2': 'dbec927017',
  '/fonts/NotoSansMyanmar.woff2': '5426fb17d8',
  '/fonts/NotoSansThai.woff2': 'e9db338b9b',
  '/fonts/NotoSerifDevanagari.woff2': '9e390641a8',
  '/fonts/NotoSerifMyanmar.woff2': 'd0e883e7ae',
  '/fonts/NotoSerifThai.woff2': '54702dc224',
  '/fonts/README.txt': '7a41200b1c',
  '/fonts/AbhayaLibre-Bold.woff2': '9d422027d2',
  '/fonts/AbhayaLibre-Medium.woff2': '33e9d0d1d1',
  '/fonts/AbhayaLibre-Regular.woff2': '5022b0b4d0',
  '/fonts/AbhayaLibre-SemiBold.woff2': '720e121809',
  '/fonts/NotoSansSymbols-Zodiac.woff2': '18ff4d0330'
};

// ------------------------------------------------------------
// පහත කිසිවක් වෙනස් කිරීමට අවශ්‍ය නැත
// ------------------------------------------------------------
const CACHE_PREFIX = 'buddhist-era-';
const VERSIONS = Object.assign({}, LAZY_FILES, OPTIONAL_FILES, CORE_FILES);

// cache නාමය ඉහත hash වලින්ම ස්වයංක්‍රීයව සෑදේ (අතින් වෙනස් කිරීමට දෙයක් නැත)
function hashOf(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(36);
}
const CACHE_NAME = CACHE_PREFIX + hashOf(JSON.stringify([RESET, VERSIONS]));

const TIMEOUT_MS = 3500;          // පිටුව භාවිතයේදී network එකට දෙන උපරිම කාලය
const INSTALL_TIMEOUT_MS = 30000; // install (පසුබිමින්) — විශාල ගොනු සඳහා වැඩි කාලයක්

// ============================================================
// Helpers
// ============================================================

// ඉල්ලීමේ path එක (?v=... සහ #hash නොසලකයි); index.html → '/'
function pathOf(url) {
  let p = new URL(url, self.location.href).pathname;
  try { p = decodeURIComponent(p); } catch (e) {}       // icon-32%C3%9732.png → icon-32×32.png (ලැයිස්තුවේ ලෙසම)
  return p === '/index.html' ? '/' : p;
}

// cache එක තුළ ගබඩා කරන key එක: path + එම ගොනුවේ hash එක (ලැයිස්තුවේ නැති ගොනු = 0)
function keyOf(path) {
  const u = new URL(path + '?v=' + (VERSIONS[path] || 0) + '&r=' + RESET, self.location.href);
  return u.pathname + u.search;                          // URL encoding එක Cache API එකට සමානව
}

// Operator fake page එක: .js / .css / රූප / json ඉල්ලද්දී HTML ආවොත් එය බොරු පිටුවකි
function looksFake(path, dest, response) {
  const ct = response.headers.get('content-type') || '';
  if (!ct.includes('text/html')) return false;
  if (dest === 'script' || dest === 'style' || dest === 'image') return true;
  return /\.(js|css|json|png|jpe?g|webp|svg|gif|ico|woff2?)$/i.test(path);
}

// redirect වී ලැබුණු response එකක් navigation එකකට දුන් විට සමහර browsers දෝෂ දෙයි — පිරිසිදු පිටපතක්
async function clean(response) {
  if (!response.redirected) return response;
  const body = await response.blob();
  return new Response(body, { status: response.status, statusText: response.statusText, headers: response.headers });
}

function fetchWithTimeout(request, ms, init) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject('timeout'), ms);
    fetch(request, init).then((response) => {
      clearTimeout(timer);
      if (!response.ok) return reject('not-ok');
      const path = new URL(response.url || request.url || request, self.location.href).pathname;
      if (looksFake(path, request.destination, response)) return reject('fake-html');
      resolve(response);
    }).catch((err) => { clearTimeout(timer); reject(err); });
  });
}

// install එකේදී: HTTP cache මඟහැර සර්වරයෙන්ම
async function fetchFresh(path) {
  const res = await fetchWithTimeout(new Request(path, { cache: 'reload', credentials: 'same-origin' }), INSTALL_TIMEOUT_MS);
  return clean(res);
}

// ============================================================
// INSTALL — වෙනස් වූ ගොනු පමණක් බාගත කරයි
// ============================================================
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    console.log('[SW] Installing:', CACHE_NAME);
    const cache = await caches.open(CACHE_NAME);

    // පැරණි cache වල ඇති දේ: key → cache, සහ භාවිත කළ path ලැයිස්තුව
    const oldByKey = new Map();
    const oldPaths = new Set();
    for (const name of await caches.keys()) {
      if (!name.startsWith(CACHE_PREFIX) || name === CACHE_NAME) continue;
      const old = await caches.open(name);
      for (const req of await old.keys()) {
        const u = new URL(req.url);
        if (u.origin !== self.location.origin) continue;
        oldByKey.set(u.pathname + u.search, old);
        oldPaths.add(pathOf(req.url));
      }
    }

    let copied = 0, downloaded = 0;
    async function bring(path) {
      const key = keyOf(path);
      if (await cache.match(key)) return;                    // දැනටමත් ඇත
      const old = oldByKey.get(key);
      if (old) {                                             // අංකය නොවෙනස් → පිටපත් කරයි
        const res = await old.match(key);
        if (res) { await cache.put(key, res); copied++; return; }
      }
      await cache.put(key, await fetchFresh(path));          // අලුත් / වෙනස් වූ ගොනුව → බාගත කරයි
      downloaded++;
    }

    // 1) අනිවාර්ය ගොනු — සියල්ලම සාර්ථක විය යුතුයි
    await Promise.all(Object.keys(CORE_FILES).map(bring));

    // 2) අමතර ගොනු + මීට පෙර භාවිත කළ lazy / ලැයිස්තුවේ නැති ගොනු
    const extra = new Set(Object.keys(OPTIONAL_FILES));
    for (const p of oldPaths) {
      if (!(p in CORE_FILES) && !p.endsWith('/sw.js')) extra.add(p);
    }
    const failed = [];
    await Promise.all([...extra].map((p) => bring(p).catch(() => failed.push(p))));
    if (failed.length) console.warn('[SW] Some optional files could not be cached:', failed);

    console.log('[SW] Installation completed. copied:', copied, 'downloaded:', downloaded);
    await self.skipWaiting();
  })());
});

// ============================================================
// ACTIVATE
// ============================================================
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((name) => {
      if ((name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) || name === 'be-fonts-1') {   // be-fonts-1 = පැරණි Google Fonts cache
        console.log('[SW] Deleting old cache:', name);
        return caches.delete(name);
      }
    }));
    await self.clients.claim();
    console.log('[SW] Activated:', CACHE_NAME);
  })());
});

// ============================================================
// FETCH
// ============================================================
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;     // Analytics ආදිය — browser එකටම (අකුරු දැන් fonts/ තුළම)
  if (url.pathname.endsWith('/sw.js')) return;
  if (request.headers.has('range')) return;

  event.respondWith(request.mode === 'navigate' ? handlePage(url) : handleAsset(request, url));
});

// ----------------------------------------------------------
// NAVIGATION — HTML පිටු : එම අනුවාදයේ cache එකෙන් (JS/CSS සමඟ සැමවිටම ගැළපේ)
// ----------------------------------------------------------
async function handlePage(url) {
  const cache = await caches.open(CACHE_NAME);
  const key = keyOf(pathOf(url.href));

  const cached = await cache.match(key);
  if (cached) return cached;

  try {
    const res = await fetchWithTimeout(url.href, TIMEOUT_MS, { cache: 'no-cache', credentials: 'same-origin' });
    const copy = await clean(res.clone());
    cache.put(key, copy).catch(() => {});
    return res;
  } catch (error) {
    console.warn('[SW] Offline navigation (or Zero-Data):', url.href, error);
    const home = await cache.match(keyOf('/'));
    if (home) return home;
    return new Response(
      '<!DOCTYPE html><html lang="si"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><body style="font-family:sans-serif;text-align:center;padding:30px"><h2>අන්තර්ජාල සම්බන්ධතාවයක් නොමැත</h2><p>Offline පිටුව ලබාගත නොහැක.</p></body></html>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

// ----------------------------------------------------------
// STATIC ASSETS — Cache First (Zero-Data වලට හොඳම)
// ----------------------------------------------------------
async function handleAsset(request, url) {
  const cache = await caches.open(CACHE_NAME);
  const key = keyOf(pathOf(url.href));

  const cached = await cache.match(key);
  if (cached) return cached;

  try {
    // cache එකේ නැති ගොනුවක් (lazy / පළමු වරට) — සර්වරයෙන් ගෙන මෙම අනුවාදයට එක් කරයි
    const res = await fetchWithTimeout(request, TIMEOUT_MS, { cache: 'no-cache' });
    if (res.type === 'basic') cache.put(key, res.clone()).catch(() => {});
    return res;
  } catch (error) {
    console.warn('[SW] Asset unavailable offline:', url.href, error);
    return new Response('මෙම ගොනුව Offline අවස්ථාවේ ලබාගත නොහැක.', { status: 503, statusText: 'Offline', headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
}

// ============================================================
// MESSAGE — Manual Update Support
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
