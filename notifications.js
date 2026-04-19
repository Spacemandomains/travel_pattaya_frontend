const recommendations = [
    { time: 8, title: "Breakfast Time!", message: "Check out Qulture for breakfast" },
    { time: 12, title: "Lunch Time!", message: "Kickin Chicken has amazing lunch specials" },
    { time: 16.33, title: "Afternoon Break!", message: "Time to relax at Tree Time" },
    { time: 17, title: "Happy Hour!", message: "Players Club has great happy hour deals" },
    { time: 18, title: "Dinner Time!", message: "Soul Bistro is perfect for dinner" },
    { time: 22, title: "Night Out!", message: "Maju Bar is the place to be" }
];

function createCustomAlert(title, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    alertDiv.innerHTML = `
        <h4>${title}</h4>
        <p>${message}</p>
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.classList.add('fade-out');
        setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
}

function scheduleAlerts() {
    recommendations.forEach(rec => {
        const now = new Date();
        let alertTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), rec.time, 0);

        if (alertTime < now) {
            alertTime.setDate(alertTime.getDate() + 1);
        }

        const timeUntilAlert = alertTime.getTime() - now.getTime();
        setTimeout(() => createCustomAlert(rec.title, rec.message), timeUntilAlert);
    });

    // Show random recommendations every 30 minutes
    setInterval(() => {
        const randomRec = recommendations[Math.floor(Math.random() * recommendations.length)];
        createCustomAlert("Quick Suggestion!", randomRec.message);
    }, 30 * 60 * 1000);
}

// Make scheduleAlerts globally available
window.scheduleAlerts = scheduleAlerts;