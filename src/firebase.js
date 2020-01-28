// Realtime Database

import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDj1dmDRo8EQJVUcuW-APeJfLmxlYh0V2A",
    authDomain: "todoist-clone-2d1ad.firebaseapp.com",
    databaseURL: "https://todoist-clone-2d1ad.firebaseio.com",
    projectId: "todoist-clone-2d1ad",
    storageBucket: "todoist-clone-2d1ad.appspot.com",
    messagingSenderId: "882245353088",
    appId: "1:882245353088:web:742b3927a6d5372345f065"
});

export { firebaseConfig as firebase };