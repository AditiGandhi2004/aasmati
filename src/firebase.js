import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3iAY13xk8NhUhcpLUn2CzBPlC3jW1eaA",
  authDomain: "hotel-asmati-corporation.firebaseapp.com",
  projectId: "hotel-asmati-corporation",
  storageBucket: "hotel-asmati-corporation.firebasestorage.app",
  messagingSenderId: "429613096937",
  appId: "1:429613096937:web:d26753a9e8272830763578",
  measurementId: "G-EM02LLWLDM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);