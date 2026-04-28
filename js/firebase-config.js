// ============================================================
//  Firebase Configuration — CartoonsLK
// ============================================================

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyARtFAZZGwKk4HxS75EG0ixLMfvcer9Kf8",
  authDomain:        "cartoonslk-ac0f9.firebaseapp.com",
  projectId:         "cartoonslk-ac0f9",
  storageBucket:     "cartoonslk-ac0f9.firebasestorage.app",
  messagingSenderId: "33249549667",
  appId:             "1:33249549667:web:80e37cba23fb5d557b4756",
  measurementId:     "G-1JYCSLSQ2T"
};

// Only this email can access the admin dashboard
const ADMIN_EMAIL = "itzlokaya@gmail.com";

// ── Initialize Firebase ──────────────────────────────────────
firebase.initializeApp(FIREBASE_CONFIG);
const auth      = firebase.auth();
const db        = firebase.firestore();
const analytics = firebase.analytics();

// ── Firestore collection reference ───────────────────────────
const seriesRef   = db.collection("series");
const episodesRef = db.collection("episodes");
const moviesRef   = db.collection("movies");
