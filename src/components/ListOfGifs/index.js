import React from "react";
import Gif from "../Gif/index";
import { ListOfGifsComponent } from "./styles";

export default function ListOfGifs({ gifs }) {
  return (
    <ListOfGifsComponent>
      {gifs.map(({ id, title, mp4 }, index) => (
        <Gif id={id} key={id} title={title} mp4={mp4} index={index} />
      ))}
    </ListOfGifsComponent>
  );
}
