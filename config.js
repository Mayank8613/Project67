import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCn-k5l0ANplIOzyLxTzyOo9ln4AZ83Q60",
    authDomain: "project67-a7bab.firebaseapp.com",
    projectId: "project67-a7bab",
    storageBucket: "project67-a7bab.appspot.com",
    messagingSenderId: "568406385967",
    appId: "1:568406385967:web:18ec91b0040a81191fedda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();