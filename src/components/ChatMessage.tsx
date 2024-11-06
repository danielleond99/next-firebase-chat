import { auth } from "@/lib/firebase";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";

interface MessageProps {
  message: DocumentData;
}

export function ChatMessage({ message }: MessageProps) {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser?.uid ? "sent" : "received";

  return (
    <div
      className={`flex ${
        messageClass === "sent" ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`flex items-center mt-10 ${
          messageClass === "sent" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Image
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt="User avatar"
          className="rounded-full object-cover"
          width={40}
          height={40}
        />
        <p
          className={`mx-2 py-2 px-4 rounded-2xl ${
            messageClass === "sent"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
