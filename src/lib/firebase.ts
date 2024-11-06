import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRABSE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIRABSE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRABSE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIRABSE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRABSE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIRABSE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIRABSE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;
