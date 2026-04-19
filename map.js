
// Initialize map centered on Pattaya
const map = L.map('map').setView([12.9236, 100.8824], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define landmarks with correct coordinates
const landmarks = [
    { name: "Jomtien-Suvarnabhumi Airport Bus Station", coords: [12.905587726217492, 100.86928731573826] },
    { name: "Tree Time Cafe", coords: [12.924258042950912, 100.88035482471379] },
    { name: "Soul Bistro", coords: [12.931543105780303, 100.8901689363539] },
    { name: "Qulture Lounge", coords: [12.883290507919781, 100.8867843909832] },
    { name: "Kickin Chicken", coords: [12.913490722209641, 100.86528913635368] },
    { name: "Maju Bar", coords: [12.925841425723188, 100.88084927868181] },
    { name: "The Players Club", coords: [12.931230165576078, 100.88471998608975] }
];

// Add markers for each landmark
landmarks.forEach(landmark => {
    L.marker(landmark.coords)
        .bindPopup(landmark.name)
        .addTo(map);
});

// Handle location button
document.getElementById('locateMe').addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = [position.coords.latitude, position.coords.longitude];
            
            // Add or update user location marker
            const userMarker = L.marker(userLocation).addTo(map);
            userMarker.bindPopup('You are here').openPopup();
            
            // Center map on user location
            map.setView(userLocation, 15);
        }, (error) => {
            alert('Unable to get location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
});


