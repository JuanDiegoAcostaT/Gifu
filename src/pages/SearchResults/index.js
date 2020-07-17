import React, { useRef, useCallback, useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs/index";
import LoadingSpinner from "../../components/Spinner/index";
import { useGifs } from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import { Link } from "@reach/router";
import debounce from "just-debounce-it";
/* import useSeo from "../hooks/useSeo"; */
import { Helmet } from "react-helmet";
import SearchForm from "../../components/SearchForm/index";
import { Button, Visor } from "./styles";

export default function SearchResults({ keyword, rating, lang }) {
  const { loading, gifs, setPage } = useGifs({ keyword, rating, lang });
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
        <LoadingSpinner />
      </>
    );
  if (gifs == "")
    return (
      <section>
        <h1>We could not find results with this keyword.</h1>
        <Link to="/">Home</Link>
      </section>
    );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <header className="o-header">
        <SearchForm
          initialKeyword={keyword}
          initialRating={rating}
          initialLang={lang}
        />
      </header>
      <div className="App-wrapper">
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <Button onClick={handleClick}>
          More Gifs About {decodeURI(keyword)}{" "}
        </Button>
        <Visor ref={externalRef}></Visor>
      </div>
    </>
  );
}
