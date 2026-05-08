const cacheName = 'v1';

// මෙහි index.html පමණක් ඇතුළත් කරන්න (නැතහොත් ඔබේ HTML ගොනුවේ නම)
const cacheAssets = [
  'index.html',
  './'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Caching Files...');
      return cache.addAll(cacheAssets);
    })
  );
});

// Activate Event (පැරණි cache ඉවත් කිරීමට)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event (Offline වූ විට පෙන්වීමට)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
