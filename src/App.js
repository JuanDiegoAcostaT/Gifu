import React, { useState, useEffect } from "react";
import ListOfGifs from "./components/ListOfGifs";
import OnlyGif from './components/OnlyGif'
import { Router, Link } from "@reach/router";

export default function App() {
  return (
    <>
      <h1>Gifú</h1>
      <Router>
        <ListOfGifs exact path="/" keyword="Drugs" />
        <OnlyGif path='/gif/:id' />
      </Router>
    </>
  );
}
