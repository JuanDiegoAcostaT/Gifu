import React from "react";
import "./Gif.css";
import { Link } from "@reach/router";
import Fav from "../Fav/index";

function Gif({ title, mp4, id }) {
  return (
    <div className="Gif">
      <div className='Gif__buttons'>
        <Fav id={id}></Fav>
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={mp4}
          loading="lazy"
          type="video/mp4"
        />
      </Link>
    </div>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id == nextProps.id;
});
