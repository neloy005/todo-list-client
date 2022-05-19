// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnWKo073gODH-4tvtNQfMPxQE4Bilzmt4",
    authDomain: "todo-list-cb9fd.firebaseapp.com",
    projectId: "todo-list-cb9fd",
    storageBucket: "todo-list-cb9fd.appspot.com",
    messagingSenderId: "557511400049",
    appId: "1:557511400049:web:0e42a8970929abef0219d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;