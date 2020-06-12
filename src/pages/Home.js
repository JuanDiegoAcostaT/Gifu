import React from "react";
import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
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

export default function Home({keyword}) {
  return (
    <div>
      <form className="form"
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
      <h3 className="last__search" >Última Busqueda</h3>
      <ListOfGifs keyword={keyword} />
    </div>
  );
}
