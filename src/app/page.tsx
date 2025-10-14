'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useKonamiCode } from './hooks/useKonamiCode';
import KonamiConfetti from './components/KonamiConfetti';
import ParticlesComponent from './components/Particles';

const messageParts = [
  "it's been 5 days (right? 14 - 9 = 5 yes i can do math bruh)",
  "yet i still haven't forgotten the amnt of setup and effort you did for my birthday on the 9th.",
  "im not a one to show off a lot, im quite humble, and keep to myself at times. so esp when my birthday came around, id just hint it a bit, but even simple wishes here and there, and then going to the temple at home w my parents would be good enough",
  "...but you didn't do that.",
  "you got ppl together. you invited ppl for me. you threw such a big thing.",
  "and even after that... you were still doubtful on whether i loved it or not.",
  'everyone else i talked to in the group, even that m*eriam (whose full name shall not be taken) said "bro, prisha did everything you need to thank her"',
  "for me its that if someone does sm big for me, i have to do it back for them. yk id do sm for you, but i get scared of what if its not enough.",
  "so i try to do the most i can. like this web application :D",
  "i still can't thank you enough. you're genuinely the best.",
  "i love you <3"
];

export default function Home() {
  const [partIndex, setPartIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const isKonamiCodeActive = useKonamiCode();

  const handleNextPart = () => {
    console.log('Next button clicked');
    if (partIndex < messageParts.length - 1) {
      setPartIndex(partIndex + 1);
    }
  };

  const handleLike = () => {
    console.log('Like button clicked');
    setLikes(likes + 1);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-rose-50 text-gray-800 p-4 sm:p-6 font-sans overflow-hidden">
      <ParticlesComponent />
      {isKonamiCodeActive && <KonamiConfetti />}
      {likes >= 10 && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-10 text-2xl text-rose-500 font-bold"
        >
          Okay, you can stop now...
        </motion.div>
      )}
      <div className="w-full max-w-2xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={partIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-700">
              {messageParts[partIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-12 flex justify-center space-x-4">
          <motion.button
            onClick={handleLike}
            className="bg-white text-rose-500 font-bold py-3 px-8 rounded-full shadow-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-6 h-6 mr-2" />
            {likes}
          </motion.button>
          {partIndex < messageParts.length - 1 && (
            <motion.button
              onClick={handleNextPart}
              className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next
            </motion.button>
          )}
        </div>
        {partIndex === messageParts.length - 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="mt-8"
          >
            <motion.div
              className="flex items-center justify-center text-rose-500"
              animate={{
                scale: [1, 1.2, 1],
                transition: { repeat: Infinity, duration: 1.5 }
              }}
            >
              <Heart className="w-16 h-16 fill-current" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
