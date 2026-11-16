// ============================================================
// Buddhist Era PWA — Service Worker
// Offline Support + Automatic Cache Update + Lie-Fi / Zero-Data Fix
// ------------------------------------------------------------
// ★ නව අනුවාදයක් deploy කරන විට වෙනස් කළ යුත්තේ පහත VERSION එක පමණි ★
//   index.html / script.js / calculation.js ආදී කිසිදු ගොනුවක ?v=... අවශ්‍ය නැත.
//
//   • VERSION වෙනස් වූ විට browser එක sw.js අලුත් බව දකියි
//     (vercel.json: sw.js = no-cache, script.js: updateViaCache:'none').
//   • install: සියලු ගොනු HTTP cache මඟහැර ({cache:'reload'}) සර්වරයෙන්ම අලුතින් ගෙන නව cache එකකට දමයි.
//     පෙර version එකේදී පළමු භාවිතයේ cache වූ ගොනු (lang/*, pali-script.js ...) ද අලුතින් ගෙන ගෙන යයි.
//   • activate: පැරණි cache මකයි → script.js හි controllerchange මගින් පිටුව එක් වරක් reload වේ.
//   • fetch: HTML ඇතුළු සියල්ල එකම version එකේ cache එකෙන් — එබැවින් අලුත් HTML + පැරණි JS
//     වැනි මිශ්‍ර තත්ත්වයක් කිසිවිට ඇති නොවේ. URL එකේ ?v=... ඇතත් නොසලකයි.
// ============================================================

const VERSION = '4.1.55';

const CACHE_PREFIX = 'buddhist-era-';
const CACHE_NAME = CACHE_PREFIX + 'v' + VERSION;

// අනිවාර්ය ගොනු — එකක් හෝ නොලැබුණොත් install අසාර්ථක වී පැරණි version එකම දිගටම ක්‍රියා කරයි
// (අඩක් අලුත් අඩක් පැරණි තත්ත්වයක් නොවේ; browser එක පසුව නැවත උත්සාහ කරයි)
const CORE_ASSETS = [
  '/', '/manifest.json', '/style.css',
  '/astronomy.browser.min.js', '/mm-poya.js', '/script.js', '/calculation.js',
  '/info.js', '/chanting.js', '/visuals3d.js', '/sunpage.js', '/uposatha.js'
];

// අමතර ගොනු — නොලැබුණත් install නවතින්නේ නැත; පළමු භාවිතයේදී cache වේ
const OPTIONAL_ASSETS = [
  '/patthana-data.js', '/pirith-data.js', '/buddha-recitation.js',
  '/buddha-vandana-data.js', '/satipatthana-data.js', '/patimokkha-data.js',
  '/three.min.js', '/moon.jpg',
  '/bg/waves.webp', '/bg/flowers.webp', '/bg/gold.webp',
  '/bg/gold-lines.svg', '/bg/pearl.webp', '/bg/damask.webp', '/bg/swirl.webp',
  '/icon-192x192.png', '/icon-512x512.png'
];
// pali-script.js, lang/*.js precache නොකරයි: හින්දි / බුරුම / තායි තෝරාගත් අයට පමණක්, පළමු භාවිතයේදී cache වේ
// (ඊළඟ version එකේ install එකේදී ඒවාද ස්වයංක්‍රීයව අලුතින් ගෙන යයි — offline දිගටම ක්‍රියා කරයි)

const TIMEOUT_MS = 3500;          // පිටුව භාවිතයේදී network එකට දෙන උපරිම කාලය
const INSTALL_TIMEOUT_MS = 30000; // install (පසුබිමින්) — විශාල ගොනු සඳහා වැඩි කාලයක්

// ============================================================
// Helpers
// ============================================================

// cache key: ?v=... සහ #hash ඉවත් කළ path එක → එකම ගොනුවට එකම key එකයි
function keyOf(url) {
  const u = new URL(url, self.location.href);
  return u.origin === self.location.origin ? u.pathname : u.origin + u.pathname;
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
      const path = new URL(response.url || request.url || request).pathname;
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
// INSTALL
// ============================================================
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    console.log('[SW] Installing:', CACHE_NAME);
    const cache = await caches.open(CACHE_NAME);

    // 1) අනිවාර්ය ගොනු — සියල්ලම ලැබුණොත් පමණක් cache එකට
    const core = await Promise.all(CORE_ASSETS.map(async (p) => [p, await fetchFresh(p)]));
    await Promise.all(core.map(([p, res]) => cache.put(p, res)));

    // 2) අමතර ගොනු + පෙර version එකේ පළමු භාවිතයේදී cache වූ ගොනු (lang/*, pali-script.js ...)
    const extra = new Set(OPTIONAL_ASSETS);
    const known = new Set(CORE_ASSETS.concat(OPTIONAL_ASSETS));
    for (const name of await caches.keys()) {
      if (!name.startsWith(CACHE_PREFIX) || name === CACHE_NAME) continue;
      const old = await caches.open(name);
      for (const req of await old.keys()) {
        const u = new URL(req.url);
        if (u.origin !== self.location.origin) continue;
        const p = u.pathname;
        if (p === '/index.html' || p.endsWith('/sw.js') || known.has(p)) continue;
        extra.add(p);
      }
    }
    const failed = [];
    await Promise.all([...extra].map(async (p) => {
      try { await cache.put(p, await fetchFresh(p)); } catch (e) { failed.push(p); }
    }));
    if (failed.length) console.warn('[SW] Some optional assets could not be cached:', failed);

    console.log('[SW] Installation completed.');
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

  if (request.mode === 'navigate') {
    event.respondWith(handlePage(url));
  } else {
    event.respondWith(handleAsset(request, url));
  }
});

// ----------------------------------------------------------
// NAVIGATION — HTML පිටු : එම version එකේ cache එකෙන් (JS/CSS සමඟ සැමවිටම ගැළපේ)
// ----------------------------------------------------------
async function handlePage(url) {
  const cache = await caches.open(CACHE_NAME);
  const isHome = url.pathname === '/' || url.pathname === '/index.html';
  const key = isHome ? '/' : keyOf(url.href);

  const cached = await cache.match(key);
  if (cached) return cached;

  try {
    const res = await fetchWithTimeout(url.href, TIMEOUT_MS, { cache: 'no-cache', credentials: 'same-origin' });
    const copy = await clean(res.clone());
    cache.put(key, copy).catch(() => {});
    return res;
  } catch (error) {
    console.warn('[SW] Offline navigation (or Zero-Data):', url.href, error);
    const home = await cache.match('/');
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
  const key = keyOf(url.href);

  const cached = await cache.match(key);
  if (cached) return cached;

  try {
    // cache එකේ නැති ගොනුවක් — සර්වරයෙන් (HTTP cache නැවත තහවුරු කර) ගෙන මෙම version එකට එක් කරයි
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
