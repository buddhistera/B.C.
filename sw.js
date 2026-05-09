const cacheName = 'v5'; // ඔබ අලුතින් update කරන විට මෙහි අංකය (v6, v7...) මාරු කරන්න

// Cache කළ යුතු ගොනු (HTML එකේ සියල්ල ඇති බැවින් මෙය සරලයි)
const cacheAssets = [
  'index.html',
  'manifest.json',
  'icon-192.png',
  './'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Service Worker: Caching Files');
      return cache.addAll(cacheAssets);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - පරණ Cache මැකීමට
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event - අලුත්ම කේතය ලබා ගැනීමට (Network First Strategy)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // අන්තර්ජාලය තිබේ නම් අලුත් පිටුව පෙන්වයි, එය Cache එකේ Update කරයි
        const resClone = response.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // අන්තර්ජාලය නැතිනම් පමණක් කලින් Save වූ පිටුව ලබා දෙයි
        return caches.match(event.request);
      })
  );
});
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
