// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJLP5uABnyk5ii-AE2x6pK2wJsFtLswn4",
  authDomain: "netflixgpt-4cfca.firebaseapp.com",
  projectId: "netflixgpt-4cfca",
  storageBucket: "netflixgpt-4cfca.appspot.com",
  messagingSenderId: "469348842401",
  appId: "1:469348842401:web:d053976ed5098c58a9e9e0",
  measurementId: "G-FS2WVXC4J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();