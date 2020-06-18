import React from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";
import useGifs from "../../hooks/useGifs";
import LoadingSpinner from "../Spinner/LoadingSpinner";

export default function ListOfGifs({ keyword }) {
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <h2>{keyword}</h2>
      <div className="list">
        {gifs.map((singleGif) => (
          <Gif
            key={singleGif.id}
            id={singleGif.id}
            title={singleGif.title}
            url={singleGif.url}
          />
        ))}
      </div>

      <button className="button__next" onClick={handleClick}>
        More Gifs About {keyword}
      </button>
    </>
  );
}
