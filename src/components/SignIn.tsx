"use client";

import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export function SignIn() {
  const signInWithGoogle = () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="bg-white text-gray-900 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-200"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
      <p className="mt-4 text-white text-center">
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </div>
  );
}
