import firebase from "firebase";import 'firebase/firestore';
 const firebaseConfig = {
    apiKey: "AIzaSyBlbemrddv_pITFP6niW_oiw_UZTANE3O8",
    authDomain: "akashgop-166ed.firebaseapp.com",
    databaseURL: "https://akashgop-166ed-default-rtdb.firebaseio.com",
    projectId: "akashgop-166ed",
    storageBucket: "akashgop-166ed.appspot.com",
    messagingSenderId: "66764998493",
    appId: "1:66764998493:web:d76d8440012c08cef8cab4",
    measurementId: "G-2YD3C0VE11"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;