// ============================================================
// Buddhist Era PWA — Service Worker
// Offline Support + Automatic Cache Update + Lie-Fi / Zero-Data Fix
// ------------------------------------------------------------
// ★ ගොනු අනුවාද (version) අංක ඇත්තේ මෙම ගොනුවේ පමණි ★
//   index.html / script.js / calculation.js ආදී ගොනුවල ?v=... අවශ්‍ය නැත (තිබුණත් නොසලකයි).
//
//   ගොනුවක් වෙනස් කළ විට: පහත ලැයිස්තුවේ එම ගොනුවේ අංකය පමණක් +1 කරන්න.
//     උදා: script.js වෙනස් කළා නම්  '/script.js': 1  →  '/script.js': 2
//   • update එකේදී බාගත වන්නේ අංකය වෙනස් වූ ගොනු පමණි.
//     අනෙක් ගොනු පැරණි cache එකෙන් පිටපත් කරයි (network භාවිතයක් නැත).
//   • වෙනස් වූ ගොනු HTTP cache මඟහැර ({cache:'reload'}) සර්වරයෙන්ම අලුතින් ගනී.
//   • නව cache එක සම්පූර්ණ වූ පසු පමණක් මාරු වේ → පිටුව එක් වරක් reload වේ
//     (අලුත් HTML + පැරණි JS වැනි මිශ්‍ර තත්ත්වයක් නැත).
//   • ලැයිස්තුවේ නැති අලුත් ගොනුවක් එක් කළොත්, එයද මෙහි ලැයිස්තුවට එක් කරන්න.
//   • සියලු ගොනු එකවර අලුතින් බාගත කිරීමට අවශ්‍ය නම්: RESET අංකය +1 කරන්න.
// ============================================================

const RESET = 1;

// අනිවාර්ය ගොනු — එකක් හෝ නොලැබුණොත් update එක අත්හැර පැරණි අනුවාදයම දිගටම ක්‍රියා කරයි
const CORE_FILES = {
  '/': 1,                              // index.html
  '/manifest.json': 1,
  '/style.css': 1,
  '/astronomy.browser.min.js': 1,
  '/mm-poya.js': 1,
  '/script.js': 1,
  '/calculation.js': 1,
  '/info.js': 1,
  '/chanting.js': 1,
  '/visuals3d.js': 4,
  '/sunpage.js': 1,
  '/uposatha.js': 1
};

// අමතර ගොනු — install එකේදී ගනී, නොලැබුණත් update එක නවතින්නේ නැත
const OPTIONAL_FILES = {
  '/patthana-data.js': 1,
  '/pirith-data.js': 1,
  '/buddha-recitation.js': 1,
  '/buddha-vandana-data.js': 1,
  '/satipatthana-data.js': 1,
  '/patimokkha-data.js': 1,
  '/three.min.js': 1,
  '/moon.jpg': 1,
  '/bg/waves.webp': 1,
  '/bg/flowers.webp': 1,
  '/bg/gold.webp': 1,
  '/bg/gold-lines.svg': 1,
  '/bg/pearl.webp': 1,
  '/bg/damask.webp': 1,
  '/bg/swirl.webp': 1,
  '/icon-192x192.png': 5,
  '/icon-512x512.png': 5
};

// හින්දි / බුරුම / තායි තෝරාගත් අයට පමණක් — පළමු භාවිතයේදී cache වේ.
// update එකේදී: අංකය නොවෙනස් නම් පිටපත් කරයි; වෙනස් නම් (එය භාවිත කළ අයට පමණක්) අලුතින් ගනී.
const LAZY_FILES = {
  '/pali-script.js': 3,
  '/lang/hi.js': 5,
  '/lang/my.js': 5,
  '/lang/th.js': 5,
  '/lang/hi-calc.js': 1,
  '/lang/my-calc.js': 1,
  '/lang/th-calc.js': 1
};

// ------------------------------------------------------------
// පහත කිසිවක් වෙනස් කිරීමට අවශ්‍ය නැත
// ------------------------------------------------------------
const CACHE_PREFIX = 'buddhist-era-';
const VERSIONS = Object.assign({}, LAZY_FILES, OPTIONAL_FILES, CORE_FILES);

// cache නාමය ඉහත අංක වලින්ම ස්වයංක්‍රීයව සෑදේ (අතින් වෙනස් කිරීමට දෙයක් නැත)
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
  const p = new URL(url, self.location.href).pathname;
  return p === '/index.html' ? '/' : p;
}

// cache එක තුළ ගබඩා කරන key එක: path + එම ගොනුවේ අංකය (ලැයිස්තුවේ නැති ගොනු = 0)
function keyOf(path) {
  return path + '?v=' + (VERSIONS[path] || 0) + '&r=' + RESET;
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
      if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) {
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
  if (url.origin !== self.location.origin) return;     // Google Fonts / Analytics ආදිය — browser එකටම
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
