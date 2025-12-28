const CACHE_NAME = 'bebenah-v4';
const assets = [
  './index.html',
  './home.html',
  './administrasi.html',
  './jurnal.html',
  './rpm.html',
  './rpm umum.html',
  './nilai.html'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(rec => {
      return rec || fetch(evt.request);
    })
  );
});
