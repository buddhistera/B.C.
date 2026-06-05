const CACHE_NAME = 'buddhist-era-v4.1.1';

const OFFLINE_URL = './offline.html';

// Static files
const STATIC_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',

  './icon-32x32.png',
  './icon-192x192.png',
  './icon-512x512.png',

];


// INSTALL
self.addEventListener('install', event => {

  // new SW immediately activate
  self.skipWaiting();

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(STATIC_ASSETS);

      })

  );

});


// ACTIVATE
self.addEventListener('activate', event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys.map(key => {

          // delete old caches
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }

        })

      );

    }).then(() => self.clients.claim())

  );

});


// FETCH
self.addEventListener('fetch', event => {

  // GET requests only
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension etc.
  if (
    !event.request.url.startsWith('http')
  ) {
    return;
  }

  // Navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {

    event.respondWith(

      fetch(event.request)

        .then(networkResponse => {

          // save latest page
          const copy = networkResponse.clone();

          caches.open(CACHE_NAME)
            .then(cache => {

              cache.put(event.request, copy);

            });

          return networkResponse;

        })

        .catch(() => {

          return caches.match(event.request)

            .then(cached => {

              // cached page
              if (cached) {
                return cached;
              }

              // fallback
              return caches.match('./index.html');

            });

        })

    );

    return;
  }


  // Static assets
  event.respondWith(

    caches.match(event.request)

      .then(cachedResponse => {

        // return cache first
        if (cachedResponse) {
          return cachedResponse;
        }

        // fetch from network
        return fetch(event.request)

          .then(networkResponse => {

            // invalid response
            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type !== 'basic'
            ) {
              return networkResponse;
            }

            // clone response
            const responseClone = networkResponse.clone();

            // dynamic cache
            caches.open(CACHE_NAME)
              .then(cache => {

                cache.put(event.request, responseClone);

              });

            return networkResponse;

          });

      })

      .catch(() => {

        // image fallback
        if (
          event.request.destination === 'image'
        ) {

          return caches.match('./icon-192x192.png');

        }

        // offline page
        return caches.match(OFFLINE_URL);

      })

  );

});
