import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import dataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(dataSongs[0]);
  return (
    <div className="">
      <Songs.Provider value={{ dataSongs, song, setSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
