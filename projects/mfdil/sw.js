// MFdil servis çalışanı: sayfa ve okuma metinleri çevrimdışı açılır; diğer istekler doğrudan ağa gider.
// Sayfa: önce ağ, yoksa önbellek. Okuma listesi ve metinler: önce ağ, yoksa önbellek (açılan ya da indirilen metinler).
const SHELL = 'mfdil-shell-v1';
const LIB = 'mfdil-lib'; // çıkışta sayfa siler (kişisel veri)

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(['./', 'manifest.webmanifest', 'icon-192.png'])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith('mfdil-shell-') && k !== SHELL).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const networkFirst = async (req, cacheName) => {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res.ok) await cache.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = await cache.match(req, { ignoreVary: true });
    if (hit) return hit;
    throw err;
  }
};

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate' && url.origin === location.origin) return e.respondWith(networkFirst(req, SHELL).catch(() => caches.match('./')));
  if (/^\/api\/library(\/text)?$/.test(url.pathname)) e.respondWith(networkFirst(req, LIB));
});

// Günlük hatırlatma (Web Push): sunucu yalnız bildirimi tetikler, metin burada yazılır.
self.addEventListener('push', (e) => {
  const d = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(d.title || 'MFdil', {
    body: d.body || 'Bugünkü çalışman seni bekliyor.',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: 'mfdil-daily',
    data: { url: './' },
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
    const open = list.find((c) => new URL(c.url).pathname.startsWith(new URL('./', location).pathname));
    return open ? open.focus() : self.clients.openWindow('./');
  }));
});
