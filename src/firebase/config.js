import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDw05x6zxSZkMoFMiai7GgIL0n_ED6yB30",
    authDomain: "react-tasker-site.firebaseapp.com",
    projectId: "react-tasker-site",
    storageBucket: "react-tasker-site.appspot.com",
    messagingSenderId: "315785238300",
    appId: "1:315785238300:web:6fe4c8dfce871f72bbccd9"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp

  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth }