const preCacheName = "pre-cache-pra-v9",
    
    preCacheFiles = [
        "/offline.html",
        "/styles/styles.css",
        "/styles/hamburgers.min.css",
        "/assets/logo2.svg",
        "/assets/imago.svg",
        "/assets/overlapping-hexagons.svg",
        "/favicon.ico"
    ];


self.addEventListener("install", evt => {
    console.log('[ServiceWorker] Install');
    
    evt.waitUntil(
        caches.open(preCacheName).then(cache => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(preCacheFiles);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', evt => {
    console.log('[ServiceWorker] Activate');
    
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== preCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener("fetch", evt => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    
    if (evt.request.mode !== 'navigate') {
        
        return;
    }

    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(preCacheName)
                    .then((cache) => {
                        return cache.match('offline.html');
                    });
            })
    );

    
});
