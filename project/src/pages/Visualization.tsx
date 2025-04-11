import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const scenes = [
  {
    title: "Peaceful Garden",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    description: "Imagine yourself walking through this peaceful garden. Feel the gentle breeze on your skin, hear the rustling leaves, and smell the fragrant flowers..."
  },
  {
    title: "Mountain Lake",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    description: "You're sitting by a serene mountain lake. The water is crystal clear, reflecting the majestic peaks. The air is crisp and pure..."
  },
  {
    title: "Beach Sunset",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    description: "The warm sand beneath your feet, gentle waves lapping at the shore. The sun slowly sets, painting the sky in beautiful oranges and pinks..."
  }
];

function Visualization() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-8">{scenes[currentScene].title}</h1>
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8 group">
        <img
          src={scenes[currentScene].image}
          alt={scenes[currentScene].title}
          className="w-full h-full object-cover"
        />
        <motion.div
          animate={{
            opacity: isPlaying ? 1 : 0,
            y: isPlaying ? 0 : 20,
          }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <p className="text-2xl max-w-2xl mx-auto px-4">
            {scenes[currentScene].description}
          </p>
        </motion.div>
        
        <button
          onClick={prevScene}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextScene}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-colors"
      >
        {isPlaying ? 'Pause' : 'Start'} Guided Visualization
      </button>
      <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
        Visual meditation helps reduce stress and anxiety by focusing your mind on peaceful imagery.
        Let your thoughts drift away as you immerse yourself in these calming scenes.
      </p>
    </div>
  );
}

export default Visualization;