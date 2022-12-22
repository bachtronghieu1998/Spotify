import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
  const { song, dataSongs, setSong } = useContext(Songs);
  const handleClickNext = () => {
    if (song.id === dataSongs.length - 1) return;
    const nextSongId = song.id + 1;
    const nextSong = dataSongs.find((item) => item.id === nextSongId);
    setSong(nextSong);
  };
  const handleClickPrev = () => {
    if (song.id === 0) return;
    const prevSongId = song.id - 1;
    const prevSong = dataSongs.find((item) => item.id === prevSongId);
    setSong(prevSong);
  };
  return (
    <div className="h-24">
      <AudioPlayer
        className="player-music"
        src={song.url}
        showSkipControls={true}
        showJumpControls={true}
        onClickNext={() => handleClickNext()}
        onClickPrevious={() => handleClickPrev()}
      />
    </div>
  );
}
