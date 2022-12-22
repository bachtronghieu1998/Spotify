import React, { useContext, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  const { dataSongs, setSong, song } = useContext(Songs);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download " />
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-800  text-gray-500">
          {dataSongs.map((songItem, index) => (
            <tr
              className={`text-center h-12 hover:bg-slate-600 ${
                song.id === songItem.id && "text-teal-400"
              }`}
              key={index}
              onClick={() => {
                setSong(songItem);
              }}
            >
              <td>{index + 1}</td>
              <td className="text-left">{songItem.name}</td>
              <td>{songItem.author}</td>
              <td>
                <a href={songItem.url}>
                  <i className="fa fa-download " />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
