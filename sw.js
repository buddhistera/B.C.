const cacheName = 'v4'; // වෙනසක් කළ විට මෙය v3, v4 ලෙස මාරු කරන්න

// Offline වැඩ කිරීමට අවශ්‍ය ගොනු (මෙහි ඔබේ HTML ගොනුවේ නම නිවැරදිව තිබිය යුතුය)
const cacheAssets = [
  'index.html',
   'manifest.json',
  'icon-192×192.png',
  './'
];

// 1. Install Event - ගොනු Cache කිරීම
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Service Worker: Caching Files');
      return cache.addAll(cacheAssets);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event - පැරණි Cache ඉවත් කිරීම
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. Fetch Event - අන්තර්ජාලය ඇත්නම් එයින් ලබාගැනීම, නැතිනම් Cache එකෙන් ලබාදීම
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // අන්තර්ජාලය තිබේ නම්, ලැබෙන අලුත් පිටුව Cache එකටත් දමයි (Update කරයි)
        const resClone = response.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // අන්තර්ජාලය නැතිනම් පමණක් Cache එක පරීක්ෂා කරයි
        return caches.match(event.request).then((res) => res);
      })
  );
});
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
