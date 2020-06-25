import React from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";

export default function ListOfGifs({ keyword, gifs }) {


  return <div className='ListOfGifs'>
    {
      gifs.map(({id, title, mp4}) =>
        <Gif
          id={id} 
          key={id}
          title={title}
          mp4={mp4}
        />
      )
    }
  </div>
}
