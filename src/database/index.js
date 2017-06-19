import firebase from 'firebase';

const firebase_config = {
apiKey: "AIzaSyBQDs25w1rBKyamg6DcWBy7yQv6f4G-uc0",
authDomain: "love-spread.firebaseapp.com",
databaseURL: "https://love-spread.firebaseio.com",
projectId: "love-spread",
storageBucket: "love-spread.appspot.com",
messagingSenderId: "522191357045"
};

firebase.initializeApp(firebase_config);
const database = firebase.database();

export default database;