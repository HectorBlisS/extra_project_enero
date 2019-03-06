import firebase from 'firebase/app'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBG8Sel6j7oICij7t3Su1uaKltHq1Rm4z4",
    authDomain: "test-4900f.firebaseapp.com",
    databaseURL: "https://test-4900f.firebaseio.com",
    projectId: "test-4900f",
    storageBucket: "test-4900f.appspot.com",
    messagingSenderId: "546821693640"
};
firebase.initializeApp(config);

export default firebase