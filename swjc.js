const CACHE_NAME = 'JConvrter';
const ASSETS = [
  'JConvrter_2026.html',
  'manifestjc.json',
  'icon301.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
