import React from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import SearchForm from '../components/SearchForm/index'
import "../globalStyles/styles.css";
import TrendingSearches from "../components/TrendingSearches/index";


export default function Home({ keyword }) {

  return (
    <div >
      <SearchForm/>
      <div className="gifs__container">
        <div className="gifs__img">
          <h2 className="last__search">Última Busqueda</h2>
          <ListOfGifs keyword={keyword} />
        </div>
        <div className="gifs__trends">
          <TrendingSearches />
        </div>
      </div>

    </div>
  );
}
