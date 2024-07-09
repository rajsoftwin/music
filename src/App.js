import React, { useState, useRef } from 'react';
import PlayerControls from './component/PlayerControls';
import TrackDetails from './component/TrackDetails';
import Playlist from './component/Playlist';
import './App.css';

const App = () => {
  const [tracks] = useState([
    { id: 1, title: 'Song One', artist: 'Artist One', src: 'song1.mp3' },
    { id: 2, title: 'Song Two', artist: 'Artist Two', src: 'song2.mp3' },
    { id: 3, title: 'Song Three', artist: 'Artist Three', src: 'song3.mp3' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % tracks.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
  };

  const handleVolumeChange = (event) => {
    audioRef.current.volume = event.target.value;
  };

  const currentTrack = tracks[currentIndex];

  return (
    <>
      <h1>Welcome to Vinu Gajala</h1>
        <div className="music-player">
          <audio
            ref={audioRef}
            src={currentTrack.src}
            onEnded={handleNext}
          />
          <TrackDetails track={currentTrack} />
          <PlayerControls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onVolumeChange={handleVolumeChange}
          />
          <Playlist
            tracks={tracks}
            currentTrackIndex={currentIndex}
            onSelectTrack={(index) => { setCurrentIndex(index); setIsPlaying(true); }}
            />
        </div>
    </>
    
  );
};

export default App;
