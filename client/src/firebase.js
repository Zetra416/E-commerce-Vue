import firebase from 'firebase/app'

require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');
require('firebase/functions');


var firebaseConfig = {
   apiKey: "AIzaSyCzHr0_x8arX-8jFYXZPmA18JA43puC_6Q",
   authDomain: "e-commerce-vue-e2a6f.firebaseapp.com",
   databaseURL: "https://e-commerce-vue-e2a6f.firebaseio.com",
   projectId: "e-commerce-vue-e2a6f",
   storageBucket: "e-commerce-vue-e2a6f.appspot.com",
   messagingSenderId: "820000239531",
   appId: "1:820000239531:web:61b30af7a2cb4746686cee"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const auth=firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export {
  firebase,
  auth,
  db,
  storage,
  functions
}
