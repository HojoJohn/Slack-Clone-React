import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyB383ONH7TNhZOCfPzbDIkztnnsv1_fB8I",

  authDomain: "slack-clone-fd5d8.firebaseapp.com",

  projectId: "slack-clone-fd5d8",

  storageBucket: "slack-clone-fd5d8.appspot.com",

  messagingSenderId: "294276381745",

  appId: "1:294276381745:web:a93bac07ac357668f8a910",

  measurementId: "G-YGFJ9BMH2S"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
