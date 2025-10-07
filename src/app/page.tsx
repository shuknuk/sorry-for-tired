"use client";

import Heart from "@/app/components/Heart";
import { useState } from "react";

export default function Home() {
  const [showHearts, setShowHearts] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-gray-800">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">My Pyari Dora,</h1>
        <p className="text-lg mb-8">I'm sorry for my crimes against your sleep schedule. I know you need to be sharp for your exams, and my shenanigans probably didn't help. Forgive me?</p>
        <p className="text-lg mb-8">I know how serious your exams can be for you and how srs you were for sleeping, and I don't want to just brush it off as a joke. </p>
        <p className="text-sm mb-8">Even though its SO FUN to piss you off 😁 </p>
        <button
          onClick={() => setShowHearts(true)}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition-colors"
        >
          Click here and see what happens??? 😉
        </button>
      </div>
      {showHearts && <Heart />}
    </main>
  );
}
