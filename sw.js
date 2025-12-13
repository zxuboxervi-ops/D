// cache static & payload supaya offline
const CACHE = 'ax-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll([
    '/',
    '/assets/app.css',
    '/assets/app.js',
    '/assets/crawler.js',
    '/assets/engine.js'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
