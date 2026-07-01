const CACHE_NAME = 'HTML_Hyprlnk';
const ASSETS = [
  'HTML_Hyprlnk_2026.html',
  'manifesthh.json',
  'iconhh2.png'
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
