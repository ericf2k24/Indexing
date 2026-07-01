const CACHE_NAME = 'HTML_Hyprlink';
const ASSETS = [
  'HTML_Hyprlink_2026.html',
  'manifesthh.json',
  'iconhh1.png'
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
