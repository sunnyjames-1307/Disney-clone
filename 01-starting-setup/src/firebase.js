import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCTb5ErKmzpMWHV-7Nhzz7FsuY2i8XaG3o",
  authDomain: "disneyplus-clone-cef90.firebaseapp.com",
  projectId: "disneyplus-clone-cef90",
  storageBucket: "disneyplus-clone-cef90.appspot.com",
  messagingSenderId: "464642362612",
  appId: "1:464642362612:web:673711f6285164234922a1",
  measurementId: "G-B5KQ127F9G",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
