"use client";

import { useState, useRef, FormEvent } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firestore, auth } from "@/lib/firebase";
import { ChatMessage } from "./ChatMessage";

export function ChatRoom() {
  const dummy = useRef<HTMLSpanElement>(null);
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q);
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (!auth.currentUser) return;

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-[calc(100vh-12rem)] overflow-y-auto mb-4">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>

      <form onSubmit={sendMessage} className="flex">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
          className="flex-grow bg-gray-700 text-white p-2 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          disabled={!formValue}
          className="bg-blue-500 text-white p-2 rounded-r-md disabled:opacity-50"
        >
          🕊️
        </button>
      </form>
    </>
  );
}
