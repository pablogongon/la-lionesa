// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBerpb4_09UWtkp4Ax1cLMNwFKFqAypPo",
    authDomain: "la-lionesa-set-up.firebaseapp.com",
    projectId: "la-lionesa-set-up",
    storageBucket: "la-lionesa-set-up.appspot.com",
    messagingSenderId: "200193277528",
    appId: "1:200193277528:web:09224583e8b761324f942d",
    measurementId: "G-7FX078F3H4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
