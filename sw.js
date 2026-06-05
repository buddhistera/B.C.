const CACHE_NAME = 'buddhist-era-v4.1.3';

const OFFLINE_URL = './offline.html';

const STATIC_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',

  './icon-32x32.png',
  './icon-192x192.png',
  './icon-512x512.png'
];


// INSTALL
self.addEventListener('install', event => {

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

  // GET only
  if (event.request.method !== 'GET') return;

  // Skip unsupported
  if (!event.request.url.startsWith('http')) return;


  // HTML pages
  if (event.request.mode === 'navigate') {

    event.respondWith(

      fetch(event.request)

        .then(networkResponse => {

          // update cache
          const clone = networkResponse.clone();

          caches.open(CACHE_NAME)

            .then(cache => {

              cache.put('./index.html', clone);

            });

          return networkResponse;

        })

        .catch(() => {

          return caches.match('./index.html');

        })

    );

    return;
  }


  // Other assets
  event.respondWith(

    caches.match(event.request)

      .then(cachedResponse => {

        // network fetch
        const fetchPromise = fetch(event.request)

          .then(networkResponse => {

            // cache valid responses
            if (
              networkResponse &&
              networkResponse.status === 200
            ) {

              const clone = networkResponse.clone();

              caches.open(CACHE_NAME)

                .then(cache => {

                  cache.put(event.request, clone);

                });

            }

            return networkResponse;

          })

          .catch(() => {

            // image fallback
            if (
              event.request.destination === 'image'
            ) {

              return caches.match('./icon-192x192.png');

            }

            return caches.match(OFFLINE_URL);

          });

        // IMPORTANT:
        // network first for updates
        return cachedResponse || fetchPromise;

      })

  );

});
