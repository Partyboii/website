const CACHE_NAME = 'tic-tac-toe-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html', // optional, if you make one
  '/manifest.json'
];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
