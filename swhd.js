const CACHE_NAME = 'HTML2Doc';
const ASSETS = [
  'HTML2Doc_2026.html',
  'manifesthd.json',
  'iconhd.png'
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
