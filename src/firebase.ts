import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8dGdPctKLg6fiu_Rnu8WZ0MhHC6VFN3I",
  authDomain: "twitter-app-f420d.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: "twitter-app-f420d",
  storageBucket: "twitter-app-f420d.appspot.com",
  messagingSenderId: "104731989841",
  appId: "1:104731989841:web:849cc68382aaba0f0f6570",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const provider = new firebase.auth.GoogleAuthProvider();

