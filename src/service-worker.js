const { SavedData } = require("./Utils/Constants");

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SavedData).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json', // If you have a manifest file
        // Add any other assets or static files you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
