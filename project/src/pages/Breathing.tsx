import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Breathing() {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          switch (phase) {
            case 'inhale':
              setPhase('hold');
              return 7;
            case 'hold':
              setPhase('exhale');
              return 8;
            case 'exhale':
              setPhase('inhale');
              return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-8">4-7-8 Breathing Exercise</h1>
      <div className="flex justify-center items-center h-[400px]">
        <motion.div
          animate={{
            scale: phase === 'inhale' ? 1.5 : phase === 'hold' ? 1.5 : 1,
            opacity: phase === 'hold' ? 0.8 : 1,
          }}
          transition={{ duration: 1 }}
          className="w-48 h-48 bg-purple-500 rounded-full flex items-center justify-center"
        >
          <div className="text-2xl font-bold">
            {phase === 'inhale' && 'Inhale'}
            {phase === 'hold' && 'Hold'}
            {phase === 'exhale' && 'Exhale'}
            <div className="text-xl mt-2">{count}</div>
          </div>
        </motion.div>
      </div>
      <p className="mt-8 text-lg text-gray-300 max-w-xl mx-auto">
        Follow the circle's animation: inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds.
        This technique helps reduce anxiety and improve sleep quality.
      </p>
    </div>
  );
}

export default Breathing;