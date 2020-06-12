import React from "react";
import './Gif.css'
import { Link } from "@reach/router";

export default function Gif({ title, url, id }) {
  return (
      <div className="gif">
        <Link to={`/gif/${id}`}><h4>{title}</h4></Link>
        <img src={url} alt={title} />
      </div>
  );
}
