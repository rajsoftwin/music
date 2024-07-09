import React from 'react';

const PlayerControls = ({ isPlaying, onPlayPause, onNext, onPrevious, onVolumeChange }) => {
  return (
    <div className="player-controls">
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={onNext}>Next</button>
      <input type="range" min="0" max="1" step="0.01" onChange={onVolumeChange} />
    </div>
  );
};

export default PlayerControls;
