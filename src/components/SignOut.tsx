"use client";

import { auth } from "@/lib/firebase";

export function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    )
  );
}
