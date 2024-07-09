import React from 'react';

const Playlist = ({ tracks, currentIndex, onSelectTrack }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <ul>
        {tracks.map((track, index) => (
          <li
            key={track.id}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => onSelectTrack(index)}
          >
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
