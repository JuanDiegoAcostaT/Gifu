import React from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";



export default function SearchResults({ keyword }) {

  return (
    <>
      <div>
        <ListOfGifs keyword={keyword} />
      </div>
    </>
  );
}
