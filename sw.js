const CACHE_NAME = 'buddhist-era-v4.1.4';

// Cache කරන ප්‍රධාන ගොනු
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-32x32.png',
  '/icon-192x192.png',
  '/icon-512x512.png'
];


// ==========================
// INSTALL
// ==========================
self.addEventListener('install', event => {

  // අලුත් Service Worker එක වහාම සක්‍රීය කිරීම
  self.skipWaiting();

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(async cache => {

        for (const file of STATIC_ASSETS) {

          try {

            await cache.add(file);

            console.log('Cached OK:', file);

          }

          catch (err) {

            console.error('Cache FAILED:', file, err);

          }

        }

      })

  );

});


// ==========================
// ACTIVATE
// ==========================
self.addEventListener('activate', event => {

  event.waitUntil(

    caches.keys()

      .then(keys => {

        return Promise.all(

          keys.map(key => {

            // පැරණි cache මකා දැමීම
            if (key !== CACHE_NAME) {

              return caches.delete(key);

            }

          })

        );

      })

      .then(() => self.clients.claim())

  );

});


// ==========================
// FETCH
// ==========================
self.addEventListener('fetch', event => {

  // GET requests පමණක්
  if (event.request.method !== 'GET') return;

  // http/https පමණක්
  if (!event.request.url.startsWith('http')) return;


  // HTML Pages
  if (event.request.mode === 'navigate') {

    event.respondWith(

      fetch(event.request)

        .then(networkResponse => {

          // අලුත් page එක cache කිරීම
          const clone = networkResponse.clone();

          caches.open(CACHE_NAME)

            .then(cache => {

              cache.put('/index.html', clone);

            });

          return networkResponse;

        })

        .catch(() => {

          // Offline fallback
          return caches.match('/index.html');

        })

    );

    return;
  }


  // Images / CSS / JS
  event.respondWith(

    caches.match(event.request)

      .then(cachedResponse => {

        // Cache එකේ තිබේ නම් එය පෙන්වයි
        if (cachedResponse) {

          // පසුබිමෙන් update කිරීම
          fetch(event.request)

            .then(networkResponse => {

              caches.open(CACHE_NAME)

                .then(cache => {

                  cache.put(
                    event.request,
                    networkResponse.clone()
                  );

                });

            });

          return cachedResponse;
        }


        // Cache එකේ නැත්නම් network
        return fetch(event.request)

          .then(networkResponse => {

            const clone = networkResponse.clone();

            caches.open(CACHE_NAME)

              .then(cache => {

                cache.put(event.request, clone);

              });

            return networkResponse;

          });

      })

      .catch(() => {

        // Image fallback
        if (
          event.request.destination === 'image'
        ) {

          return caches.match('/icon-192x192.png');

        }

        // Default fallback
        return caches.match('/index.html');

      })

  );

});
