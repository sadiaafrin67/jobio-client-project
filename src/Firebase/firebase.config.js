// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBO_wNhIdanG1S_cM7cCGjnAppblxVDgc",
  authDomain: "jobio-client-project.firebaseapp.com",
  projectId: "jobio-client-project",
  storageBucket: "jobio-client-project.appspot.com",
  messagingSenderId: "437801382780",
  appId: "1:437801382780:web:5242ec76bd1216416ceaf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app