import React from "react";

const Song = ({ currentsongs }) => {
  return (
    <div className="song-container">
      <img src={currentsongs.cover} alt={currentsongs.name}></img>
      <h2>{currentsongs.name}</h2>
      <h3>{currentsongs.artist}</h3>
    </div>
  );
};

export default Song;
