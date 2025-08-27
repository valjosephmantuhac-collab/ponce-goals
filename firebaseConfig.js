import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3oSoD95L-hGVS40kIk5f6pH87nV0JEQU",
  authDomain: "mygoals-vjp.firebaseapp.com",
  projectId: "mygoals-vjp",
  storageBucket: "mygoals-vjp.firebasestorage.app",
  messagingSenderId: "522184737601",
  appId: "1:522184737601:web:0b056a7a938bd5cd0957c0",
  measurementId: "G-XR15ZY25X2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);