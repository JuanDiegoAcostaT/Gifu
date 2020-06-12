import React from "react";
import Gif from "../Gif/Gif";
import './ListOfGifs.css'
import useGifs from '../../hooks/useGifs'
import LoadingSpinner from "../Spinner/LoadingSpinner";

export default function ListOfGifs({ keyword }) {

  const { loading, gifs} = useGifs({keyword})

  if(loading) return <LoadingSpinner/>
  

  return (
    <div className="list">
      {gifs.map((singleGif) => (
        <Gif key={singleGif.id} id={singleGif.id} title={singleGif.title} url={singleGif.url} />
      ))}
    </div>
  );
}
