// Service Worker for caching assets for 1 day
const CACHE_NAME = 'fbaio-cache-v1';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

// Assets to cache immediately on install
const PRECACHE_URLS = [
    // './', './index.html'
];

// Patterns for assets to cache
const CACHEABLE_PATTERNS = [
    /\.js$/,
    /\.css$/,
    /\.png$/,
    /\.jpg$/,
    /\.jpeg$/,
    /\.gif$/,
    /\.svg$/,
    /\.webp$/,
    /\.woff$/,
    /\.woff2$/,
    /\.ttf$/,
    /\.eot$/
];

// Install event - precache essential assets
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Precaching essential assets');
                return cache.addAll(PRECACHE_URLS);
            })
            .then(() => {
                console.log('[Service Worker] Skip waiting');
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[Service Worker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[Service Worker] Claiming clients');
                return self.clients.claim();
            })
    );
});

// Helper function to check if URL should be cached
function shouldCache(url) {
    // Don't cache external resources
    if (!url.startsWith(self.location.origin)) {
        return false;
    }

    // Check if URL matches cacheable patterns
    return CACHEABLE_PATTERNS.some(pattern => pattern.test(url));
}

// Helper function to check if cache is still fresh
async function isCacheFresh(response) {
    if (!response) return false;

    const cachedDate = response.headers.get('sw-cache-date');
    if (!cachedDate) return false;

    const cacheTime = new Date(cachedDate).getTime();
    const now = Date.now();

    return now - cacheTime < CACHE_DURATION;
}

// Helper function to add timestamp to cached response
async function addCacheTimestamp(response) {
    const headers = new Headers(response.headers);
    headers.set('sw-cache-date', new Date().toISOString());

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers
    });
}

// Fetch event - implement caching strategy
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = request.url;

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip chrome extensions and other protocols
    if (!url.startsWith('http')) {
        return;
    }

    // For HTML files, use Network-First strategy
    if (request.headers.get('accept')?.includes('text/html') || url.endsWith('.html')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // Clone and cache the response
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseToCache);
                    });
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(request);
                })
        );
        return;
    }

    // For cacheable assets, use Cache-First with 1-day expiration
    if (shouldCache(url)) {
        event.respondWith(
            caches.open(CACHE_NAME).then(async cache => {
                const cachedResponse = await cache.match(request);

                // Check if cache exists and is still fresh
                if (cachedResponse && (await isCacheFresh(cachedResponse))) {
                    console.log('[Service Worker] Serving from cache:', url);
                    return cachedResponse;
                }

                // Cache is stale or doesn't exist, fetch from network
                try {
                    console.log('[Service Worker] Fetching from network:', url);
                    const networkResponse = await fetch(request);

                    // Cache successful responses
                    if (networkResponse && networkResponse.status === 200) {
                        const responseWithTimestamp = await addCacheTimestamp(
                            networkResponse.clone()
                        );
                        cache.put(request, responseWithTimestamp);
                    }

                    return networkResponse;
                } catch (error) {
                    console.log('[Service Worker] Network failed, serving stale cache:', url);
                    // If network fails, serve stale cache if available
                    return (
                        cachedResponse ||
                        new Response('Offline - Resource not available', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        })
                    );
                }
            })
        );
        return;
    }

    // For everything else, just fetch from network
    event.respondWith(fetch(request));
});

// Listen for messages from the client
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches
                .delete(CACHE_NAME)
                .then(() => {
                    console.log('[Service Worker] Cache cleared');
                    return self.clients.matchAll();
                })
                .then(clients => {
                    clients.forEach(client => {
                        client.postMessage({ type: 'CACHE_CLEARED' });
                    });
                })
        );
    }
});
