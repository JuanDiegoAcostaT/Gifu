import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Header from './components/Header/Header'
import { Router } from "@reach/router";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Home exact path="/" />
        <SearchResults exact path="/search/:keyword" />
        <Detail path="/gif/:id" />
      </Router>
    </>
  );
}
