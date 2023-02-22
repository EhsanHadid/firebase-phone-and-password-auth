import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDglYNO7QluAv9BXTbKBcedha4MfV44xZM",
  authDomain: "fir-phone-pass-auth.firebaseapp.com",
  projectId: "fir-phone-pass-auth",
  storageBucket: "fir-phone-pass-auth.appspot.com",
  messagingSenderId: "896025771152",
  appId: "1:896025771152:web:f910cf8a0c28b16befac15",
  measurementId: "G-K84JYQTPHW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
