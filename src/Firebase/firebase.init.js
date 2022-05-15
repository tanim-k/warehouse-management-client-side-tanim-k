// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQROOSPP7hlnPf6UmTosXIeu6fAbjX4wk",
  authDomain: "warehouse-management-auth.firebaseapp.com",
  projectId: "warehouse-management-auth",
  storageBucket: "warehouse-management-auth.appspot.com",
  messagingSenderId: "1079164090929",
  appId: "1:1079164090929:web:5289c4eddc0a924d667310",
  measurementId: "G-8VCLK5FGH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;