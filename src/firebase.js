import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBL5L8U44itya454Qd-n-Bcx6-fb1P-mWA",
  authDomain: "just-clock-it-5ce00.firebaseapp.com",
  projectId: "just-clock-it-5ce00",
  storageBucket: "just-clock-it-5ce00.appspot.com",
  messagingSenderId: "990794597626",
  appId: "1:990794597626:web:42e259a71feeb6be663543",
  measurementId: "G-RDJH4HP66W",
};  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
