import React from "react";
import "./styles.css";

export default function OnlyGif({
  title,
  id,
  rating,
  bitly_gif_url,
  import_datetime,
  slug,
  mp4,
}) {
  return (
    <>
      <div className="onlyGif" key={id}>
        <h3>{title}</h3>
        <div className="gif__info">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={mp4}
            loading="lazy"
            type="video/mp4"
          />
          <div className="gif__details">
            <span>{rating}</span>
            <span>{id}</span>
            <span>{bitly_gif_url}</span>
            <span>{import_datetime}</span>
            <span>{slug}</span>
          </div>
        </div>
      </div>
    </>
  );
}
