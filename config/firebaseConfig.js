
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDgi7EVhv5eB_p35lgPn8ChDT_4g7W03Pg",
  authDomain: "sports-app-ab321.firebaseapp.com",
  projectId: "sports-app-ab321",
  storageBucket: "sports-app-ab321.appspot.com",
  messagingSenderId: "829744572906",
  appId: "1:829744572906:web:97758b96b4058c1b592a93",
  measurementId: "G-0PDMBL83L0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

module.exports = {
  auth
}