import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSongs,
  audioRef,
  isPlaying,
  setSongs,
  librarystatus,
}) => {
  return (
    <div className={`library ${librarystatus ? "active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            song={song}
            songs={songs}
            setCurrentSongs={setCurrentSongs}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
