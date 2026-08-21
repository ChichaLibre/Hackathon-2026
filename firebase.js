// Firebase config for guesserdb
const firebaseConfig = {
  apiKey: "AIzaSyDzeV0_5ZukicU5Gqnr1sfpU9a9unuimNY",
  authDomain: "guesserdb.firebaseapp.com",
  databaseURL: "https://guesserdb-default-rtdb.firebaseio.com",
  projectId: "guesserdb",
  storageBucket: "guesserdb.firebasestorage.app",
  messagingSenderId: "11901870977",
  appId: "1:11901870977:web:926223c63ae1404b243e80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database reference
const db = firebase.database();
