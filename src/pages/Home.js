import React from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import SearchForm from "../components/SearchForm/index";
import TrendingSearches from "../components/TrendingSearches/index";
import "../globalStyles/styles.css";
import { useGifs } from "../hooks/useGifs";
import { Helmet } from "react-helmet";

export default function Home({ keyword }) {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Gifú | Home</title>
        <meta name="description" content="Gifú Searching" />
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} keyword={keyword} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  );
}
