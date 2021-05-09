import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSongs,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelct = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSongs(selectedSong[0]);
    //Add active
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelct}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
