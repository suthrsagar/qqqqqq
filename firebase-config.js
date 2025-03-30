// Firebase SDK को इंपोर्ट करें
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// 🔥 आपकी Firebase Configuration (जो आपको Console से मिली थी)
const firebaseConfig = {
  apiKey: "AIzaSyC-8ve3ncXbjfB4msv_6lI3LLuCsTlNrIo",
  authDomain: "sagar-65b58.firebaseapp.com",
  projectId: "sagar-65b58",
  storageBucket: "sagar-65b58.appspot.com",  // 🔥 इसमें ".app" नहीं आएगा, बस ".com" रहेगा
  messagingSenderId: "123248971317",
  appId: "1:123248971317:web:8a33e55d4c2b436da76b7c",
  measurementId: "G-W619EV6LN9"
};

// Firebase App Initialize करें
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Authentication को इनेबल करें

export { auth };
