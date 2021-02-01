import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCg55sQOEHkwrcQ85Lkjb8Askz3ZPSEEkY",
  authDomain: "react-native-login-4a70e.firebaseapp.com",
  databaseURL: "https://react-native-login-4a70e-default-rtdb.firebaseio.com",
  projectId: "react-native-login-4a70e",
  storageBucket: "react-native-login-4a70e.appspot.com",
  messagingSenderId: "932390939859",
  appId: "1:932390939859:web:ef8197ac329e9149233826",
  measurementId: "G-Q5JPX96BEX"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase