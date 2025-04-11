import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';

const sounds = [
  { 
    name: 'Rain',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=rain-ambient-114354.mp3'
  },
  {
    name: 'Ocean Waves',
    url: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_88447e769f.mp3?filename=ocean-waves-112762.mp3'
  },
  {
    name: 'Forest Birds',
    url: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_c4e0d7e66d.mp3?filename=birds-19624.mp3'
  },
  {
    name: 'Meditation Bells',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/22/audio_c8f4b7c4a7.mp3?filename=tibetan-bells-115247.mp3'
  },
  {
    name: 'Stream',
    url: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_d624c4e0d8.mp3?filename=stream-114942.mp3'
  },
  {
    name: 'White Noise',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=white-noise-114354.mp3'
  }
];

function Sound() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(0.5);
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    sounds.forEach(sound => {
      const audio = new Audio(sound.url);
      audio.loop = true;
      audioRefs.current[sound.name] = audio;
    });

    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  const toggleSound = async (name: string) => {
    if (playing === name) {
      audioRefs.current[name].pause();
      setPlaying(null);
      if (sessionStartTime) {
        const duration = Math.round((new Date().getTime() - sessionStartTime.getTime()) / 1000 / 60);
        try {
          await fetch('http://localhost:5000/api/sessions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'Sound',
              duration,
              soundType: name
            }),
          });
        } catch (error) {
          console.error('Failed to save session:', error);
        }
        setSessionStartTime(null);
      }
    } else {
      if (playing) {
        audioRefs.current[playing].pause();
      }
      audioRefs.current[name].volume = volume;
      audioRefs.current[name].play();
      setPlaying(name);
      setSessionStartTime(new Date());
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (playing) {
      audioRefs.current[playing].volume = newVolume;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Sound Meditation</h1>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        {sounds.map((sound) => (
          <div
            key={sound.name}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center"
          >
            <button
              onClick={() => toggleSound(sound.name)}
              className="w-24 h-24 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors mb-4"
            >
              {playing === sound.name ? (
                <VolumeX className="h-12 w-12" />
              ) : (
                <Volume2 className="h-12 w-12" />
              )}
            </button>
            <h3 className="text-xl font-semibold">{sound.name}</h3>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-lg w-full max-w-xs">
        <div className="flex items-center gap-4">
          <Volume1 className="h-5 w-5" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
          />
          <Volume2 className="h-5 w-5" />
        </div>
      </div>
      
      <p className="text-center mt-12 text-lg text-gray-300 max-w-2xl mx-auto">
        Choose from our collection of calming natural sounds to enhance your meditation practice.
        Each sound is carefully selected to help you achieve deeper relaxation and focus.
      </p>
    </div>
  );
}

export default Sound