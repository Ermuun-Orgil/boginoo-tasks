import {useEffect, useState} from 'react';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCVrw6V53w4Ep__6saQxNoVLtecFczlwjI",
    authDomain: "boginoo-b5983.firebaseapp.com",
    databaseURL: "https://boginoo-b5983.firebaseio.com",
    projectId: "boginoo-b5983",
    storageBucket: "boginoo-b5983.appspot.com",
    messagingSenderId: "861693896424",
    appId: "1:861693896424:web:822ba2f59f369098868b5d",
    measurementId: "G-8YKTGWD8XK"
  };

export const useFirebase = () => {
    const [state, setState] = useState({firebase});

    useEffect(() => {
        let app;
        if (!firebase.apps.length) {
            app = firebase.initializeApp(firebaseConfig);
        }
        let auth = firebase.auth(app);
        let firestore = firebase.firestore(app);
        setState({app, firebase, auth, firestore});
    }, [])

    return state;
}