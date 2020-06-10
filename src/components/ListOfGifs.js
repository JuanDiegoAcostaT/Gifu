import React from "react";
import Gif from "./Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <div>
      {gifs.map((singleGif) => (
        <Gif key={singleGif.id} title={singleGif.title} url={singleGif.url} />
      ))}
    </div>
  );
}
