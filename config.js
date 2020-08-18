import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAWwXD3hxstqDH9ZZgqY88lbrVj-WRcdxc",
    authDomain: "willy-app-2e2be.firebaseapp.com",
    databaseURL: "https://willy-app-2e2be.firebaseio.com",
    projectId: "willy-app-2e2be",
    storageBucket: "willy-app-2e2be.appspot.com",
    messagingSenderId: "413741172441",
    appId: "1:413741172441:web:afd113d7b2e768b18560c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();