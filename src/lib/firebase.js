import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyDE70NKINvrDXknXsCD692oc6gOXF9JVTs",
    authDomain: "thottam-37ed8.firebaseapp.com",
    projectId: "thottam-37ed8",
    storageBucket: "thottam-37ed8.appspot.com",
    messagingSenderId: "623376708875",
    appId: "1:623376708875:web:ad17be1e5e8baa62ab9e0e"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };