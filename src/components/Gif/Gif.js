import React from "react";
import "./Gif.css";
import { Link } from "@reach/router";

 function Gif({ title, url, id }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} type="MPEG4/WebM" />
      </Link>
    </div>
  );
}

export default React.memo(Gif, ( prevProps, nextProps ) => {
  return prevProps.id == nextProps.id
})

