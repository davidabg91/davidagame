const CACHE_NAME = 'odd-one-out-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/script.js',
  '/style.css',
  '/comic-button.css',
  '/styles.css',
  '/manifest.json',
  '/images/logogame.png',
  '/images/app-icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});


