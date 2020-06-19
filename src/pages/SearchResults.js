import React, {useRef} from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";

export default function SearchResults({ keyword }) {


  return (
    <div className="gifs__img">
        <ListOfGifs keyword={keyword} />
      </div>
  );
}
