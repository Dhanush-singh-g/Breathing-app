import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Wind, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const MeditationCard = ({ icon: Icon, title, description, to }: { icon: any, title: string, description: string, to: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center text-center h-full"
  >
    <Icon className="h-12 w-12 mb-4 text-purple-300" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-6 flex-grow">{description}</p>
    <Link
      to={to}
      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors mt-auto"
    >
      Start Practice
    </Link>
  </motion.div>
);

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">Find Your Inner Peace</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Begin your journey to mindfulness with our guided meditation practices.
          Choose your preferred method and let us help you achieve mental clarity and emotional balance.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <MeditationCard
          icon={Eye}
          title="Visualization Meditation"
          description="Immerse yourself in guided imagery exercises to enhance focus and creativity through calming natural scenes and peaceful environments."
          to="/visualization"
        />
        <MeditationCard
          icon={Wind}
          title="Breathing Meditation"
          description="Master various breathing techniques to reduce stress and increase energy using proven methods like 4-7-8 breathing."
          to="/breathing"
        />
        <MeditationCard
          icon={Music}
          title="Sound Meditation"
          description="Experience deep relaxation through ambient sounds, nature recordings, and binaural beats designed for meditation."
          to="/sound"
        />
      </div>
    </div>
  );
}

export default Home;