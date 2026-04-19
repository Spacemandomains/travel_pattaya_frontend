
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyCDfUcW54P_6rgKJVyJzL9VQc9uZz_Ic54",
    authDomain: "travel-app-b05de.firebaseapp.com",
    projectId: "travel-app-b05de",
    storageBucket: "travel-app-b05de.firebasestorage.app",
    messagingSenderId: "240958486564",
    appId: "1:240958486564:web:6d5143ec89a1d4c75040b1",
    measurementId: "G-T5534SVD40"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form completion will be handled by button clicks

document.getElementById('quickForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    try {
        const userData = {
            firstName: document.getElementById('firstName').value,
            email: document.getElementById('email').value,
            timestamp: new Date().toISOString()
        };

        await addDoc(collection(db, "users"), userData);
        localStorage.setItem('formCompleted', 'true');
        window.location.href = 'map.html';
    } catch (error) {
        console.error("Error saving data: ", error);
        alert("Failed to save data. Please try again.");
    }
});

window.skipForm = function() {
    localStorage.setItem('formCompleted', 'true');
    window.location.href = 'map.html';
};
