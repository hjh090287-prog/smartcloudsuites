const CACHE_NAME = 'smartcloud-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/js/suite-nav.js',
  '/assets/js/suite-footer.js',
  '/dev/index.html',
  '/finance/index.html',
  '/creative/index.html',
  '/fun/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
