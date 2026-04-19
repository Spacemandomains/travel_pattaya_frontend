
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/generated-icon.png',
    badge: '/generated-icon.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('Pattaya Hotspots', options)
  );
});
