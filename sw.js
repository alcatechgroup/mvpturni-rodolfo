// TURNI · Service Worker — network-first para HTML, cache-first para assets
const CACHE = 'turni-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  // HTML sempre da rede — garante versão mais recente
  if(e.request.mode === 'navigate' || url.pathname.endsWith('.html')){
    e.respondWith(
      fetch(e.request)
        .then(r => { const c = r.clone(); caches.open(CACHE).then(ch => ch.put(e.request, c)); return r; })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Assets estáticos: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(r => {
      if(r.ok && r.type === 'basic'){ const c = r.clone(); caches.open(CACHE).then(ch => ch.put(e.request, c)); }
      return r;
    }))
  );
});
