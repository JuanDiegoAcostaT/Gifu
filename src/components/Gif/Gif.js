import React from "react";
import "./Gif.css";
import { Link } from "@reach/router";

export default function Gif({ title, url, id }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  );
}
