// Fonctionnement hors connexion : l'application est servie depuis le cache,
// les ressources externes (police, module de lecture des captures) sont mises en cache au premier usage.
const V = "annonces-v2";
const SHELL = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    // Application : réseau d'abord (mises à jour), cache si hors connexion
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
  } else {
    // Ressources externes versionnées : cache d'abord
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok || res.type === "opaque") { const c = res.clone(); caches.open(V).then(x => x.put(e.request, c)); }
      return res;
    })));
  }
});
