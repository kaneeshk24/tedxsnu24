// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEPMWa5DTaIlFPTe3eGw_KG4wYcz4IjMw",
  authDomain: "tedx24-ticket.firebaseapp.com",
  databaseURL: "https://tedx24-ticket-default-rtdb.firebaseio.com",
  projectId: "tedx24-ticket",
  storageBucket: "tedx24-ticket.appspot.com",
  messagingSenderId: "680920513334",
  appId: "1:680920513334:web:516062cf72fd91a91a9197",
  measurementId: "G-555GQ1DK77",
  storageBucket: "gs://tedx24-ticket.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);