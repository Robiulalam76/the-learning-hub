// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACQBIUqnvEiUESWh7jEHig3jlAxSm4-uE",
    authDomain: "the-learning-hub-b3af3.firebaseapp.com",
    projectId: "the-learning-hub-b3af3",
    storageBucket: "the-learning-hub-b3af3.appspot.com",
    messagingSenderId: "539388438749",
    appId: "1:539388438749:web:6e141a39dce8a7e5fc9334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default app;