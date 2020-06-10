import React, {useState, useEffect} from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
import './ListOfGifs.css'
import LoadingSpinner from "./LoadingSpinner";

export default function ListOfGifs({ keyword }) {

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
       setGifs(gifs)
        setLoading(false)
    });
  }, [keyword]);

  if(loading) return <LoadingSpinner/>
  

  return (
    <div className="list">
      {gifs.map((singleGif) => (
        <Gif key={singleGif.id} id={singleGif.id} title={singleGif.title} url={singleGif.url} />
      ))}
    </div>
  );
}
