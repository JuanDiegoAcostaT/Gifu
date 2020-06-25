import React, { useRef, useCallback, useEffect } from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import { useGifs } from "../hooks/useGifs";
import useNearScreen from "../hooks/useNearScreen";
import { Link } from "@reach/router";
import debounce from "just-debounce-it";
/* import useSeo from "../hooks/useSeo"; */
import { Helmet } from "react-helmet";

export default function SearchResults({ keyword }) {
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

/*  Dejo de usar el hook useSeo porque paso a usar react-helmet */

  const title = gifs ? `${gifs.length} results of ${keyword}` : "";
  const description = `Detail of ${keyword}`;
/*   useSeo({ description }); */

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  if (loading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <LoadingSpinner />;
      </>
    );
  if (gifs == "")
    return (
      <div className="Error">
        <h1>We could not find results with this keyword.</h1>
        <Link to="/">Home</Link>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Helmet>
      <div className="App-wrapper">
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <button className="btn2" onClick={handleClick}>
          More Gifs About {decodeURI(keyword)}{" "}
        </button>
        <div id="visor" ref={externalRef}></div>
      </div>
    </>
  );
}
