const CACHE_NAME = 'TConvrter';
const ASSETS = [
  'TConvrter_2026.html',
  'manifesttc.json',
  'icon192.png'
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