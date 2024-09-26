import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = { 
  apiKey: "AIzaSyBnS913s-oOVQTNEHqlDixS9S-BZaY47VI",
  authDomain: "vtu-event-management-system.firebaseapp.com",
  projectId: "vtu-event-management-system",
  storageBucket: "vtu-event-management-system.appspot.com",
  messagingSenderId: "71811968117",
  appId: "1:71811968117:web:b5dadb466fbb008402dc3c",
  measurementId: "G-PD1679YHJG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const firestore = getFirestore(app);

export { auth, firestore }; 