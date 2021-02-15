var CACHE_NAME = "app-cache"
const DATA_CACHE_NAME = "data-cache"

var cachedUrls = [
    "/",
  "/db.js",
  "/index.js",
  "/manifest.json",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
]

self.eddEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(cachedUrls)
        })
    )
})

