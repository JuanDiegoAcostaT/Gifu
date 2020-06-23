import React, { useCallback, useRef, useEffect } from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";
import useGifs from "../../hooks/useGifs";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import TrendingSearches from "../TrendingSearches/index";


export default function ListOfGifs({ keyword }) {
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  const handleClick  = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <h2>{keyword}</h2>
      <div className="container__list--gifs">
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

        <div className="gifs__trends">
          <TrendingSearches />
        </div>

      </div>

      
      <button className="button__next" onClick={handleClick}>
          More Gifs About {keyword}
        </button>

        <div id="visor" ref={externalRef}></div>


    </>
  );
}
