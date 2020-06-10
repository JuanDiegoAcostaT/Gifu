import React, { useState, useEffect } from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Router, Link } from "@reach/router";

export default function App() {
  return (
    <>
      <h1>Gifú</h1>
      <Link to='/gif/drugs'>Drugs</Link>
      <br/><br/>
      <Link to='/gif/soccer'>Soccer</Link>
      <br/><br/>
      <Link to='/gif/cars'>Cars</Link>
      <Router>
        <ListOfGifs exact path="/gif/:keyword" keyword="drugs" />
      </Router>
    </>
  );
}
