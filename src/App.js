import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header/Header";
import { Router, Link } from "@reach/router";
import "./globalStyles/styles.css";

export default function App() {
  return (
    <>
      <div className="App">
      <Header />
        <section className="App-content">
          <Router>
            <Home  path="/" />
            <SearchResults  path="/search/:keyword" />
            <Detail path="/gif/:id" />
          </Router>
        </section>
      </div>
    </>
  );
}
