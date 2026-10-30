// ============================================================
// Buddhist Era PWA — Service Worker
// Version: v4.1.41
// Offline Support + Automatic Cache Update
// ============================================================

const CACHE_NAME = 'buddhist-era-v4.1.44';

const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',

  '/info.js',
  '/style.css',
  '/script.js',

  '/astronomy.browser.min.js?v=1',
  '/chanting.js',
  '/patthana-data.js',
  '/calculation.js',
  '/pirith-data.js',
  '/buddha-recitation.js',
  '/buddha-vandana-data.js',
  '/satipatthana-data.js',
  '/patimokkha-data.js',
  '/sunpage.js',
  '/three.min.js?v=1',
  '/uposatha.js',
  '/visuals3d.js?v=4',

  '/bg/waves.webp?v=1',
  '/bg/flowers.webp?v=1',
  '/bg/gold.webp?v=1',
  '/bg/gold-lines.svg?v=1',
  '/bg/pearl.webp?v=1',
  '/bg/damask.webp?v=1',
  '/bg/swirl.webp?v=1',
  '/moon.jpg?v=1',

  '/icon-192x192.png?v=4',
  '/icon-512x512.png?v=4'
];


// ============================================================
// INSTALL
// ============================================================

self.addEventListener('install', (event) => {

  event.waitUntil(
    caches.open(CACHE_NAME)

      .then(async (cache) => {

        console.log('[SW] Installing:', CACHE_NAME);

        // එක් ගොනුවක් අසාර්ථක වුවහොත් එය හඳුනාගැනීම සඳහා
        // ගොනු එකින් එක Cache කරයි.

        const failedAssets = [];

        for (const asset of CACHE_ASSETS) {

          try {

            const response = await fetch(asset, {
              cache: 'reload'
            });

            if (!response.ok) {
              throw new Error(
                `HTTP ${response.status}`
              );
            }

            await cache.put(asset, response);

          } catch (error) {

            failedAssets.push(asset);

            console.error(
              '[SW] Failed to cache:',
              asset,
              error
            );

          }

        }

        // අත්‍යවශ්‍ය ගොනු නොමැති නම් ස්ථාපනය
        // සාර්ථක ලෙස සලකන්නේ නැත.

        const requiredAssets = [
          '/',
          '/index.html'
        ];

        const missingRequired = [];

        for (const asset of requiredAssets) {

          const response = await cache.match(asset);

          if (!response) {
            missingRequired.push(asset);
          }

        }

        if (missingRequired.length > 0) {

          throw new Error(
            'Required files missing: ' +
            missingRequired.join(', ')
          );

        }

        if (failedAssets.length > 0) {

          console.warn(
            '[SW] Some assets could not be cached:',
            failedAssets
          );

        }

        console.log(
          '[SW] Installation completed.'
        );

      })

      .then(() => self.skipWaiting())

  );

});


// ============================================================
// ACTIVATE
// ============================================================

self.addEventListener('activate', (event) => {

  event.waitUntil(

    caches.keys()

      .then((cacheNames) => {

        return Promise.all(

          cacheNames.map((cacheName) => {

            // මෙම යෙදුමේ පැරණි Cache ඉවත් කරයි.
            // වෙනත් යෙදුම්වල Cache ඉවත් නොකරයි.

            if (
              cacheName.startsWith('buddhist-era-') &&
              cacheName !== CACHE_NAME
            ) {

              console.log(
                '[SW] Deleting old cache:',
                cacheName
              );

              return caches.delete(cacheName);

            }

          })

        );

      })

      .then(() => self.clients.claim())

      .then(() => {

        console.log(
          '[SW] Activated:',
          CACHE_NAME
        );

      })

  );

});


// ============================================================
// FETCH
// ============================================================

self.addEventListener('fetch', (event) => {

  const request = event.request;
  const url = new URL(request.url);

  // GET ඉල්ලීම් පමණක් හසුරුවයි.

  if (request.method !== 'GET') {
    return;
  }

  // වෙනත් Origin වෙත යන ඉල්ලීම් මෙම Cache
  // ක්‍රමයෙන් හසුරුවන්නේ නැත.

  if (url.origin !== self.location.origin) {
    return;
  }

  // Google Analytics ඉල්ලීම් නොසලකා හරියි.

  if (
    url.hostname.includes('googletagmanager.com') ||
    url.hostname.includes('google-analytics.com')
  ) {
    return;
  }


  // ----------------------------------------------------------
  // NAVIGATION — HTML පිටු
  // ----------------------------------------------------------

  if (request.mode === 'navigate') {

    event.respondWith(

      (async () => {

        try {

          // Internet තිබේ නම් අලුත්ම පිටුව ලබාගනී.

          const networkResponse = await fetch(request);

          if (networkResponse.ok) {

            const cache = await caches.open(CACHE_NAME);

            // පිටුවේ URL සහ /index.html යන දෙකම Cache කරයි.

            await cache.put(
              request,
              networkResponse.clone()
            );

            await cache.put(
              '/index.html',
              networkResponse.clone()
            );

          }

          return networkResponse;

        } catch (error) {

          console.warn(
            '[SW] Offline navigation:',
            request.url
          );

          // මුලින් ඉල්ලූ URL එක සොයයි.

          const cachedPage = await caches.match(request);

          if (cachedPage) {
            return cachedPage;
          }

          // ඉන්පසු මුල් පිටුව සොයයි.

          const cachedIndex =
            await caches.match('/index.html') ||
            await caches.match('/');

          if (cachedIndex) {
            return cachedIndex;
          }

          // Cache තුළ පිටුවක් නොමැති නම්
          // පැහැදිලි දෝෂ පණිවිඩයක් ලබාදෙයි.

          return new Response(
            '<!DOCTYPE html>' +
            '<html lang="si">' +
            '<meta charset="UTF-8">' +
            '<meta name="viewport" content="width=device-width,initial-scale=1">' +
            '<title>Offline</title>' +
            '<body style="font-family:sans-serif;text-align:center;padding:30px">' +
            '<h2>අන්තර්ජාල සම්බන්ධතාවයක් නොමැත</h2>' +
            '<p>Offline පිටුව ලබාගත නොහැක.</p>' +
            '<p>කරුණාකර අන්තර්ජාලය සම්බන්ධ කර නැවත උත්සාහ කරන්න.</p>' +
            '</body></html>',
            {
              status: 503,
              headers: {
                'Content-Type': 'text/html; charset=utf-8'
              }
            }
          );

        }

      })()

    );

    return;
  }


  // ----------------------------------------------------------
  // STATIC ASSETS — Cache First
  // ----------------------------------------------------------

  event.respondWith(

    (async () => {

      // Query string සහිත URL සඳහාද ගැළපෙන Cache
      // ප්‍රතිචාරයක් සොයයි.

      const cachedResponse = await caches.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      try {

        const networkResponse = await fetch(request);

        // සාර්ථක ප්‍රතිචාර පමණක් Cache කරයි.

        if (
          networkResponse &&
          networkResponse.ok &&
          networkResponse.type === 'basic'
        ) {

          const cache = await caches.open(CACHE_NAME);

          await cache.put(
            request,
            networkResponse.clone()
          );

        }

        return networkResponse;

      } catch (error) {

        console.warn(
          '[SW] Asset unavailable offline:',
          request.url
        );

        // CSS/JS/රූපයක් Cache කර නොමැති නම්
        // අසාර්ථකත්වය පැහැදිලිව වාර්තා කරයි.

        return new Response(
          'මෙම ගොනුව Offline අවස්ථාවේ ලබාගත නොහැක.',
          {
            status: 503,
            statusText: 'Offline',
            headers: {
              'Content-Type': 'text/plain; charset=utf-8'
            }
          }
        );

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
