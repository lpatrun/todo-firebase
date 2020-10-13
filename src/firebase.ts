import firebase from 'firebase/app';
import 'firebase/firestore'; 

const config = {
  apiKey: "AIzaSyAIg1BKZ2SR4AVMkbVjcrodDZfajMgoCWc",
  authDomain: "react-todo-2095c.firebaseapp.com",
  databaseURL: "https://react-todo-2095c.firebaseio.com",
  projectId: "react-todo-2095c",
  storageBucket: "react-todo-2095c.appspot.com",
  messagingSenderId: "553106365833",
  appId: "1:553106365833:web:3ff46a8d1a79700d849558",
  measurementId: "G-74GTF4N6G3"
};

firebase.initializeApp(config);

export default firebase;
