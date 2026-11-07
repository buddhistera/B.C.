// ============================================================
// Buddhist Era PWA — Service Worker
// Version: v4.1.45 - Zero Data Fix + Offline Stable
// Offline Support + Automatic Cache Update + Lie-Fi Fix
// ============================================================

const CACHE_NAME = 'buddhist-era-v4.1.50';

const CACHE_ASSETS = [
  '/', '/index.html', '/manifest.json',
  '/info.js', '/style.css', '/script.js',
  '/astronomy.browser.min.js?v=1', '/chanting.js', '/patthana-data.js',
  '/calculation.js', '/pirith-data.js', '/buddha-recitation.js',
  '/buddha-vandana-data.js', '/satipatthana-data.js', '/patimokkha-data.js',
  '/sunpage.js', '/three.min.js?v=1', '/uposatha.js', '/visuals3d.js?v=4',
  '/bg/waves.webp?v=1', '/bg/flowers.webp?v=1', '/bg/gold.webp?v=1',
  '/bg/gold-lines.svg?v=1', '/bg/pearl.webp?v=1', '/bg/damask.webp?v=1',
  '/bg/swirl.webp?v=1', '/moon.jpg?v=1',
  '/icon-192x192.png?v=5', '/icon-512x512.png?v=5'
];

const TIMEOUT_MS = 3500;

// ============================================================
// Helper: Timeout + Fake Operator Page Detection
// ============================================================
function fetchWithTimeout(request) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject('timeout'), TIMEOUT_MS);
    fetch(request, { cache: 'no-store' }).then(response => {
      clearTimeout(timer);
      if (!response.ok) return reject('not-ok');

      // Operator fake page එක අහුවෙන තැන: JS/CSS ඉල්ලද්දි HTML ආවොත්
      const ct = response.headers.get('content-type') || '';
      const dest = request.destination;
      if ((dest === 'script' || dest === 'style' || request.url.match(/\.js(\?|$)/)) && ct.includes('text/html')) {
        return reject('fake-html');
      }
      resolve(response);
    }).catch(reject);
  });
}

// ============================================================
// INSTALL
// ============================================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Installing:', CACHE_NAME);
      const failedAssets = [];
      for (const asset of CACHE_ASSETS) {
        try {
          // install එකේදීත් fake page එක cache වෙන්න එපා
          const response = await fetchWithTimeout(new Request(asset, { cache: 'reload' }));
          await cache.put(asset, response);
        } catch (error) {
          failedAssets.push(asset);
          console.error('[SW] Failed to cache:', asset, error);
          // install එකේදී එකක් fail වුණොත් උත්සාහයක් ලෙස normal fetch එකෙන්
          try {
            const fallback = await fetch(asset, { cache: 'reload' });
            if(fallback.ok) await cache.put(asset, fallback);
          } catch(e){}
        }
      }

      const requiredAssets = ['/', '/index.html'];
      const missingRequired = [];
      for (const asset of requiredAssets) {
        const response = await cache.match(asset);
        if (!response) missingRequired.push(asset);
      }
      if (missingRequired.length > 0) {
        throw new Error('Required files missing: ' + missingRequired.join(', '));
      }
      if (failedAssets.length > 0) {
        console.warn('[SW] Some assets could not be cached:', failedAssets);
      }
      console.log('[SW] Installation completed.');
    }).then(() => self.skipWaiting())
  );
});

// ============================================================
// ACTIVATE
// ============================================================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName.startsWith('buddhist-era-') && cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()).then(() => {
      console.log('[SW] Activated:', CACHE_NAME);
    })
  );
});

// ============================================================
// FETCH
// ============================================================
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;
  if (url.hostname.includes('googletagmanager.com') || url.hostname.includes('google-analytics.com')) return;

  // ----------------------------------------------------------
  // NAVIGATION — HTML පිටු : Network-First with Timeout
  // ----------------------------------------------------------
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetchWithTimeout(request);
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, networkResponse.clone());
          await cache.put('/index.html', networkResponse.clone());
          return networkResponse;
        } catch (error) {
          console.warn('[SW] Offline navigation (or Zero-Data):', request.url, error);
          const cachedPage = await caches.match(request);
          if (cachedPage) return cachedPage;
          const cachedIndex = await caches.match('/index.html') || await caches.match('/');
          if (cachedIndex) return cachedIndex;
          return new Response(
            '<!DOCTYPE html><html lang="si"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><body style="font-family:sans-serif;text-align:center;padding:30px"><h2>අන්තර්ජාල සම්බන්ධතාවයක් නොමැත</h2><p>Offline පිටුව ලබාගත නොහැක.</p></body></html>',
            { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        }
      })()
    );
    return;
  }

  // ----------------------------------------------------------
  // STATIC ASSETS — Cache First (Zero-Data වලට හොඳම)
  // ----------------------------------------------------------
  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse; // Data තිබ්බත් නැතත් cache එකේ තියෙනවා නම් ඒකෙන්ම දෙනවා - වේගවත්, කැඩෙන්නේ නෑ
      }
      try {
        const networkResponse = await fetchWithTimeout(request);
        if (networkResponse && networkResponse.ok && networkResponse.type === 'basic') {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        console.warn('[SW] Asset unavailable offline:', request.url, error);
        return new Response('මෙම ගොනුව Offline අවස්ථාවේ ලබාගත නොහැක.', { status: 503, statusText: 'Offline', headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })()
  );
});

// ============================================================
// MESSAGE — Manual Update Support
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
