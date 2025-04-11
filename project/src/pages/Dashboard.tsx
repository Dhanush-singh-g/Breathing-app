import React from 'react';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

function Dashboard() {
  // This is a placeholder for MongoDB integration
  const mockData = {
    totalMinutes: 120,
    sessionsCompleted: 8,
    streak: 5,
    recentSessions: [
      { date: '2024-03-10', type: 'Breathing', duration: 15 },
      { date: '2024-03-09', type: 'Sound', duration: 20 },
      { date: '2024-03-08', type: 'Visualization', duration: 10 },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Meditation Journey</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-6 w-6 text-purple-300" />
            <h3 className="text-xl font-semibold">Total Minutes</h3>
          </div>
          <p className="text-3xl font-bold">{mockData.totalMinutes}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-6 w-6 text-purple-300" />
            <h3 className="text-xl font-semibold">Sessions</h3>
          </div>
          <p className="text-3xl font-bold">{mockData.sessionsCompleted}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-6 w-6 text-purple-300" />
            <h3 className="text-xl font-semibold">Day Streak</h3>
          </div>
          <p className="text-3xl font-bold">{mockData.streak}</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Recent Sessions</h2>
        <div className="space-y-4">
          {mockData.recentSessions.map((session, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <p className="font-semibold">{session.type}</p>
                <p className="text-sm text-gray-300">{session.date}</p>
              </div>
              <p className="text-purple-300">{session.duration} minutes</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;