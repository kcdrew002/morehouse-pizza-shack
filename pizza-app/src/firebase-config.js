// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2C5n6tgcDlw1SnogNAzK2XGXhJ0-YZWg",
  authDomain: "morehouse-pizza-shack.firebaseapp.com",
  projectId: "morehouse-pizza-shack",
  storageBucket: "morehouse-pizza-shack.appspot.com",
  messagingSenderId: "165877242336",
  appId: "1:165877242336:web:9dee475073f9710aba7385",
  measurementId: "G-LSCWS6JSS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);