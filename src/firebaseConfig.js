// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_WxZnSIt0v4FOVZZK32q9Ui5UglAz4r4",
  authDomain: "saarthi1-a65bb.firebaseapp.com",
  projectId: "saarthi1-a65bb",
  storageBucket: "saarthi1-a65bb.appspot.com",
  messagingSenderId: "113075639801",
  appId: "1:113075639801:web:e9dc67ed21ab130534d928",
  measurementId: "G-TEKNW27N9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;