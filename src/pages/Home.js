import React from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import { Link, navigate } from "@reach/router";
import "../globalStyles/styles.css";

export default function Home({ keyword }) {



  return (
    <div >
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          const keyword = event.target.elements[0].value;
          event.target.reset();
          navigate(`/search/${keyword}`);
        }}
      >
        <input className='gif__input' placeholder="Search a Gif...." type="text" />
        <button>Search</button>
      </form>

      <div className="gifs__container">
        <div className="gifs__img">
          <h2 className="last__search">Última Busqueda</h2>
          <ListOfGifs keyword={keyword} />
        </div>



      </div>
    </div>
  );
}
