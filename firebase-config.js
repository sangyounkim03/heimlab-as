import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJ4ITH9eyvRvf1lbjeQ6SvUKpvp1rJXWU",
    authDomain: "dnb-partner-as.firebaseapp.com",
    projectId: "dnb-partner-as",
    storageBucket: "dnb-partner-as.firebasestorage.app",
    messagingSenderId: "164320070124",
    appId: "1:164320070124:web:2a53d834c7080bc02318c9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };