import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    projectId: "floodb-8af39",
    apiKey: "AIzaSyDx2WGma9dVeD_a8KukXzISZfGRdBWYDjs",
    authDomain: "floodb-8af39.firebaseapp.com",
    databaseURL: "https://floodb-8af39.firebaseio.com",
    storageBucket: "floodb-8af39.appspot.com",
    messagingSenderId: "1049061414186",
    appId: "1:1049061414186:web:0c0f4a854507f4957a3a53",
    measurementId: "G-L9R19F9EE4",
  })
  .firestore();

// Export types that exists in Firestore
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
