import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import "../globalStyles/styles.css";

const POPULAR_GIFS = [
  "Drugs",
  "Car",
  "Soccer",
  "Home",
  "Colombia",
  "Dog",
  "Usa",
];

export default function Home() {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const keyword = event.target.elements[0].value;
          event.target.reset();
          navigate(`/search/${keyword}`);
        }}
      >
        <input placeholder="Search a Gif...." type="text" />
        <button>Search</button>
      </form>

      <h2>Los Gifs Mas Populares</h2>
      <ul className="gif__popular">
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
