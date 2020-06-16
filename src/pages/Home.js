import React from "react";
import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
import { Link, navigate } from "@reach/router";
import "../globalStyles/styles.css";
import TrendingSearches from '../components/TrendingSearches/index'


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


      <h3 className="last__search" >Última Busqueda</h3>
      <ListOfGifs keyword={keyword} />

      <TrendingSearches  />


    </div>
  );
}
