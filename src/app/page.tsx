"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { Navbar } from "@/components/Navbar";
import { SignIn } from "@/components/SignIn";
import { ChatRoom } from "@/components/ChatRoom";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-4xl mx-auto px-4">
          {user ? <ChatRoom /> : <SignIn />}
        </div>
      </main>
    </>
  );
}
