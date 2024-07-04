import firebase from "firebase/compat/app";

import 'firebase/compat/firestore';
// import 'firebase/auth';
import 'firebase/compat/storage';

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPyX4fsV3L3NAvcPZm87olAlXF3XusFpA",
  authDomain: "drive-clone-ed83a.firebaseapp.com",
  projectId: "drive-clone-ed83a",
  storageBucket: "drive-clone-ed83a.appspot.com",
  messagingSenderId: "11306659248",
  appId: "1:11306659248:web:e803b7745229da2e893a75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
