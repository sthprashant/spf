// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ 
      apiKey: "AIzaSyDxrvoXcRjoF-_RKApXiiHsLtW_qkZANtQ",
    authDomain: "smart-pharmacy-fridge.firebaseapp.com",
    databaseURL: "https://smart-pharmacy-fridge.firebaseio.com",
    projectId: "smart-pharmacy-fridge",
    storageBucket: "smart-pharmacy-fridge.appspot.com",
    messagingSenderId: "546895053677",
    appId: "1:546895053677:web:a7f46cd96e2183d4e69064",
    measurementId: "G-P2LRDF1V03"
})
  .database();