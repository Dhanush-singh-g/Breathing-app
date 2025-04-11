import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Wind, Music, Menu } from 'lucide-react';
import Home from './pages/Home';
import Visualization from './pages/Visualization';
import Breathing from './pages/Breathing';
import Sound from './pages/Sound';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <nav className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Moon className="h-6 w-6" />
            MindFlow
          </h1>
          <a href="/dashboard" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
            <Menu className="h-5 w-5" />
            Dashboard
          </a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/breathing" element={<Breathing />} />
          <Route path="/sound" element={<Sound />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;