import { SignOut } from "./SignOut";

export function Navbar() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 fixed w-full top-0 z-10 flex justify-between">
      <h1 className="text-2xl font-bold">⚛️🔥💬 NextChat</h1>
      <SignOut />
    </header>
  );
}
