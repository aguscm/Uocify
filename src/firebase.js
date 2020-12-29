import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABrCUGBrt8xUSIQNccf6O2CpD2s2XUUIY",
    authDomain: "uocify-444ad.firebaseapp.com",
    databaseURL: "https://uocify-444ad.firebaseio.com",
    projectId: "uocify-444ad",
    storageBucket: "uocify-444ad.appspot.com",
    messagingSenderId: "568123383595",
    appId: "1:568123383595:web:fe772ff59113924b91ef6e"
  };

 const app = firebase.initializeApp(firebaseConfig);


export const db = app.database();

