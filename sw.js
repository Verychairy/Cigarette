const CACHE_NAME = 'break-timer-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/resources/cigarette.png',
    '/resources/finished_cigarette.png',
    '/resources/exhale.wav',
    '/resources/cigarette_finish.wav'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
}); 