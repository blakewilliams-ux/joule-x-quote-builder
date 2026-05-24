const CACHE_NAME = "joule-x-quote-builder-v3";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./config-images.js",

  "./site-assets/sciton.png",
  "./site-assets/joule-x.png",
  "./site-assets/app-icon-192.png",
  "./site-assets/app-icon-512.png",

  "./config/BBL.png",
  "./config/Halo.png",
  "./config/diVa.png",
  "./config/ClearSilk.png",
  "./config/ClearV.png",
  "./config/HaloTribrid.png",
  "./config/Touchup.png",
  "./config/Complete-Resurfacing.png",
  "./config/Heroic.png"
  "./config/ClearSuite.png",
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
