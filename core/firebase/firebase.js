import 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD2I6l8w_RFxkhK6xoOqZPJ7V71U-F2RrI",
  authDomain: "neamv-332ae.firebaseapp.com",
  databaseURL: "https://neamv-332ae.firebaseio.com",
  storageBucket: "neamv-332ae.appspot.com",
};

export const firebaseApp = firebase.initializeApp(config)
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
