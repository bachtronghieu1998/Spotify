import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { dataSongs, setSong, song } = useContext(Songs);
  console.log(song);
  return (
    <div className="col-span-1 flex flex-col">
      <h2 className="text-cyan-500 ml-3 mt-3">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl ml-3">Sing me to sleep</h2>
      <div className="flex justify-center mt-10">
        <img src={song.links.images[0].url} alt="avt" className="w-[240px] " />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          src={song.links.images[1].url}
          alt="avt"
          className="w-[100px] rounded-full"
        />
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}
