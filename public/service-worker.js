const cacheDataGroceries = "groceriesApp-V1";

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheDataGroceries).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/cart',
        '/service-worker.js',
        '/static/js/bundle.js',
        'logo192.png',
        'favicon.ico',
        '/manifest.json', // If you have a manifest file
        // Add any other assets or static files you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  console.log(`incepted request for ${event.request.url}`)
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
