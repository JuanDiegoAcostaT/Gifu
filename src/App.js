import React, { useState, useEffect } from "react";
import getGifs from "./services/getGifs";
import ListOfGifs from "./components/ListOfGifs";

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "money" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div>
      <h1>Gifú</h1>
      <ListOfGifs gifs={gifs} />
    </div>
  );
}
