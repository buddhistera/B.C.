const CACHE_NAME = 'buddhist-era-v4.1.2'; // අලුත් අප්ඩේට් එකක් දැමූ විට මෙන්න මේ Version අංකය වෙනස් කරන්න

const OFFLINE_URL = './offline.html';

// ස්ථාවර ගොනු (Static files)
const STATIC_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './icon-32x32.png',
  './icon-192x192.png',
  './icon-512x512.png',
];

// 1. INSTALL - ඇප් එක මුලින්ම ස්ථාපනය වන විට
self.addEventListener('install', event => {
  // අලුත් සර්විස් වර්කර් කෙනෙක් ආ සැනින් පැරණි එක ඉවත් කර සක්‍රීය වීමට බල කිරීම
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

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


// 3. FETCH - වෙබ් අඩවියේ දත්ත ඉල්ලීම් (Requests) පාලනය කිරීම
self.addEventListener('fetch', event => {
  // ලබාගැනීමේ (GET) ඉල්ලීම් පමණක් පරීක්ෂා කරයි
  if (event.request.method !== 'GET') {
    return;
  }

  // බාහිර Extensions හෝ අනවශ්‍ය URL මඟ හැරීම
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // ප්‍රධාන HTML පිටු සඳහා (Navigation requests)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // අලුත්ම පිටුව පසුබිමෙන් Cache එකට සුරැකීම
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, copy);
          });
          return networkResponse;
        })
        .catch(() => {
          // ඉන්ටර්නෙට් නොමැති නම් Cache එකෙන් ලබා දීම
          return caches.match(event.request).then(cached => {
            if (cached) {
              return cached;
            }
            // Cache එකෙත් නැතිනම් ප්‍රධාන index.html පිටුව පෙන්වීම
            return caches.match('./index.html');
          });
        })
    );
    return;
  }

  // අනෙකුත් දත්ත සඳහා (CSS, JS, Images ආදිය) - Stale-While-Revalidate උපක්‍රමය
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      
      // ඉන්ටර්නෙට් හරහා අලුත් ෆයිල් එකක් තිබේදැයි පසුබිමෙන් (Background) පරීක්ෂා කිරීම
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          // ෆයිල් එක සාර්ථකව ලැබුනේ නම් එය Cache එක තුළ යාවත්කාලීන කරයි
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // ඉන්ටර්නෙට් නොමැති විට පින්තූරයක් නම් default පින්තූරය පෙන්වීම
          if (event.request.destination === 'image') {
            return caches.match('./icon-192x192.png');
          }
          // වෙනත් ගොනුවක් නම් offline පිටුව පෙන්වීම
          return caches.match(OFFLINE_URL);
        });

      // දැනට Cache මතකයේ ඇති පැරණි දත්ත ක්ෂණිකව පෙන්වයි (නැතහොත් ඉන්ටර්නෙට් එකෙන් එනතුරු සිටී)
      return cachedResponse || fetchPromise;
    })
  );
});
