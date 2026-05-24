const CACHE_NAME = 'joule-x-quote-builder-v1';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./site-assets/Sciton.png",
  "./site-assets/Joule X.png",
  "./site-assets/app-icon-192.png",
  "./site-assets/app-icon-512.png",
  "./site-assets/app-icon-maskable-512.png",
  "./site-assets/config-icons/BBL.png",
  "./site-assets/config-icons/HEROic.png",
  "./site-assets/config-icons/Halo.png",
  "./site-assets/config-icons/HaloTribrid.png",
  "./site-assets/config-icons/Diva.png",
  "./site-assets/config-icons/diVa.png",
  "./site-assets/config-icons/ClearV.png",
  "./site-assets/config-icons/ClearSilk.png",
  "./site-assets/config-icons/ClearSuite.png",
  "./site-assets/config-icons/CompleteResurfacing.png",
  "./site-assets/config-icons/Complete Resurfacing.png"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
