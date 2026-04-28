// ============================================================
//  Firebase Configuration â€” CartoonsLK
// ============================================================

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyARtFAZZGwKk4HxS75EG0ixLMfvcer9Kf8",
  authDomain:        "cartoonslk-ac0f9.firebaseapp.com",
  projectId:         "cartoonslk-ac0f9",
  storageBucket:     "cartoonslk-ac0f9.firebasestorage.app",
  messagingSenderId: "33249549667",
  appId:             "1:33249549667:web:22e11bfe45a3ea297b4756",
};

// Only this email can access the admin dashboard
const ADMIN_EMAIL = "itzlokaya@gmail.com";

// â”€â”€ Initialize Firebase â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db   = firebase.firestore();

// â”€â”€ Firestore collection reference â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const seriesRef   = db.collection("series");
const episodesRef = db.collection("episodes");

