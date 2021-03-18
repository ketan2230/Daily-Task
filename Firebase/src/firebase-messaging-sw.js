importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDx804VdFLKc0Ku3sz9v898XRte_Ot7Zys",
    authDomain: "angular9crud-5f474.firebaseapp.com",
    databaseURL: "https://angular9crud-5f474-default-rtdb.firebaseio.com",
    projectId: "angular9crud-5f474",
    storageBucket: "angular9crud-5f474.appspot.com",
    messagingSenderId: "294913025197",
    appId: "1:294913025197:web:35edc9a911e093c0429224",
    measurementId: "G-79N37YVTPK"
});
const messaging = firebase.messaging();