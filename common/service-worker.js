const CACHE_NAME = "edukids-cache-v1";

const urlsToCache = [
  "./", 
  "./styles.css",
  "./manifest.json"
];

// Install service worker and cache common files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached files if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
