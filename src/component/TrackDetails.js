import React from 'react';

const TrackDetails = ({ track }) => {
  return (
    <div className="track-details">
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
    </div>
  );
};

export default TrackDetails;
