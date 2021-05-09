import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import "./scss/app.scss";
import Nav from "./components/Nav";

function App() {
  //ref
  const audioRef = useRef(null);
  //Stat
  const [songs, setSongs] = useState(data());
  const [currentsongs, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animatioPersin: 0,
  });
  const [librarystatus, setLibrarystatus] = useState(false);
  //Function
  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const fullCurrent = Math.round(current);
    const fullDuration = Math.round(duration);
    const animation = Math.round((fullCurrent / fullDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animatioPersin: animation,
    });
  };
  const skipnext = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentsongs.id);
    await setCurrentSongs(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${librarystatus ? "library-active" : ""}`}>
      <Nav librarystatus={librarystatus} setLibrarystatus={setLibrarystatus} />
      <Song currentsongs={currentsongs} />
      <Player
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentsongs={currentsongs}
        songs={songs}
        setCurrentSongs={setCurrentSongs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSongs={setCurrentSongs}
        isPlaying={isPlaying}
        setSongs={setSongs}
        librarystatus={librarystatus}
      />
      <audio
        src={currentsongs.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onLoadedMetadata={timeUpdate}
        onEnded={skipnext}
      ></audio>
    </div>
  );
}

export default App;
