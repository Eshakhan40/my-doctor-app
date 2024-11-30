
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAAT_JrNTBtQVdy_mWm1IHNUua8M52X3U",
  authDomain: "doctor-app-14673.firebaseapp.com",
  projectId: "doctor-app-14673",
  storageBucket: "doctor-app-14673.firebasestorage.app",
  messagingSenderId: "620201924441",
  appId: "1:620201924441:web:e2e1de3c1a8e2522d19e48",
  measurementId: "G-R9SFBN3P2K"
};


const app = initializeApp(firebaseConfig);

const auth= getAuth(app)
console.log("good");