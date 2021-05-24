import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC6xAu_CR6Pet3TAMauYnUiVzBFqszR0cA",
    authDomain: "letbreathe-c5d85.firebaseapp.com",
    projectId: "letbreathe-c5d85",
    storageBucket: "letbreathe-c5d85.appspot.com",
    messagingSenderId: "598763041520",
    appId: "1:598763041520:web:dd591c7915efcf58f18835"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();