"use client";

import Heart from "@/app/sorry/components/Heart";
import { useState } from "react";

const apologyLines = [
  "I did brush it off a bit, but I know ur pissed off against my crimes against ur sleep schedule. Which is funny because I am too 😁",
  "I know you were serious about your sleep at one point, and I may have sort of kinda perhaps just a little bit goofed it off? :D",
  "I know how serious your exams can be for you and how srs you were for sleeping, and I don't want to just brush it off as a joke.",
  "Even though its SO FUN to piss you off 😁. So, sorry for being so hot.",
  "So, I am sorry for being mean to you and making you stay up late. And yes the sudden lunch switch-up today when I said in the morning it would be fine was also a di*k move of me."
];

const buttonTexts = [
  "okay....ugh...",
  "fine, im listening...",
  "okay.... ",
  "...",
  "fineeee",
  "Sworryyy??? 😘"
];

export default function Home() {
  const [lineIndex, setLineIndex] = useState(0);
  const [heartKey, setHeartKey] = useState(0);

  const handleNextLine = () => {
    if (lineIndex < apologyLines.length) {
      setLineIndex(lineIndex + 1);
    }
    if (lineIndex === apologyLines.length) {
      setHeartKey(prevKey => prevKey + 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-gray-800">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">My Pyari Dora,</h1>
        {apologyLines.slice(0, lineIndex).map((line, index) => (
          <p key={index} className="text-lg mb-8 fade-in">{line}</p>
        ))}
        <button
          onClick={handleNextLine}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition-colors fade-in"
        >
          {buttonTexts[lineIndex]}
        </button>
      </div>
      {heartKey > 0 && <Heart key={heartKey} />}
    </main>
  );
}
