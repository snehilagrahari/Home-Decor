
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//
const config={
    apiKey: "AIzaSyAxNfa7yJe1gbDxDJfcSX3gHr0yraLN35U",
    authDomain: "home-decor-e3278.firebaseapp.com",
    projectId: "home-decor-e3278",
    storageBucket: "home-decor-e3278.appspot.com",
    messagingSenderId: "155101787389",
    appId: "1:155101787389:web:ff0207902844dd639fba94"
  }
    
  firebase.initializeApp(config)


  export default firebase