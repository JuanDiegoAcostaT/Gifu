import React from "react";
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import { Router, Link } from "@reach/router";

export default function App() {
  return (
    <>
      <Link to='/'>
       <h1 className="main__title" >Gifú</h1>
      </Link>
      <Router>
        <Home exact path ="/"/>
        <SearchResults exact path="/search/:keyword"  />
        <Detail path='/gif/:id'/>
      </Router>
    </>
  );
}
