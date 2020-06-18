import React, { useState, useEffect } from "react";
import "./OnlyGif.css";

const api_key = "vhMurxNjlCKesQlp88kAZIczkQZIahdU";

export default function OnlyGif({ id }) {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}&limit=100`;

  const [OnlyGif, setOnlyGif] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        setOnlyGif([data]);
      });
  }, []);

  return (
    <>
      {OnlyGif.map((Gif) => (
        <div className="onlyGif" key={Gif.id}>
          <h3>{Gif.title}</h3>
          <div className="gif__info">
            <img src={Gif.images.downsized_medium.url} alt={Gif.title} />
            <div className="gif__details">
              <span>{Gif.rating}</span>
              <span>{Gif.id}</span>
              <span>{Gif.bitly_gif_url}</span>
              <span>{Gif.import_datetime}</span>
              <span>{Gif.slug}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
