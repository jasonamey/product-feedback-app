// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAKrnVfzruH8U8bJG7Sh3kTdJnTZ9_6Aqw",
//   authDomain: "project-data-ja.firebaseapp.com",
//   databaseURL: "https://project-data-ja-default-rtdb.firebaseio.com",
//   projectId: "project-data-ja",
//   storageBucket: "project-data-ja.appspot.com",
//   messagingSenderId: "237996218808",
//   appId: "1:237996218808:web:b648b70fd6315fcb67174d",
//   measurementId: "G-Q6H9GJV1WN",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// const provider = new firebaseApp.auth.GoogleAuthProvider();

// console.log(firebaseApp);
// export { auth, provider };
// export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKrnVfzruH8U8bJG7Sh3kTdJnTZ9_6Aqw",
  authDomain: "project-data-ja.firebaseapp.com",
  databaseURL: "https://project-data-ja-default-rtdb.firebaseio.com",
  projectId: "project-data-ja",
  storageBucket: "project-data-ja.appspot.com",
  messagingSenderId: "237996218808",
  appId: "1:237996218808:web:b648b70fd6315fcb67174d",
  measurementId: "G-Q6H9GJV1WN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
