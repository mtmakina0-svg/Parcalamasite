// MT Makina Service Worker
// Cache-first strategy for static assets, network-first for API calls

const CACHE_NAME = 'mt-makina-v1';
const STATIC_CACHE = 'mt-makina-static-v1';

// Assets to cache on install
const STATIC_ASSETS = [
    '/',
    '/manifest.json',
    '/favicon.ico',
    '/favicon-192x192.png',
    '/favicon-512x512.png',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            console.log('[SW] Caching static assets');
            return cache.addAll(STATIC_ASSETS);
        })
    );
    // Activate immediately
    self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME && name !== STATIC_CACHE)
                    .map((name) => {
                        console.log('[SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        })
    );
    // Take control of all clients immediately
    self.clients.claim();
});

// Fetch event - cache-first for static, network-first for API
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip external requests (except images from i.ibb.co)
    if (!url.origin.includes(self.location.origin) && !url.origin.includes('i.ibb.co')) {
        return;
    }

    // API calls - network first
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    return response;
                })
                .catch(() => {
                    return new Response(JSON.stringify({ error: 'Offline' }), {
                        status: 503,
                        headers: { 'Content-Type': 'application/json' },
                    });
                })
        );
        return;
    }

    // Static assets and images - cache first
    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                // Return cached version, but also update cache in background
                event.waitUntil(
                    fetch(request).then((response) => {
                        if (response.ok) {
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(request, response);
                            });
                        }
                    }).catch(() => { })
                );
                return cachedResponse;
            }

            // Not in cache, fetch from network
            return fetch(request)
                .then((response) => {
                    // Cache successful responses
                    if (response.ok) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    // Offline fallback for navigation requests
                    if (request.mode === 'navigate') {
                        return caches.match('/');
                    }
                    return new Response('Offline', { status: 503 });
                });
        })
    );
});

// Handle messages from the app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
