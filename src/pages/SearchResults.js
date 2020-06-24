import React, { useRef, useCallback, useEffect } from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import LoadingSpinner from '../components/Spinner/LoadingSpinner'
import SearchForm from '../components/SearchForm'
import {useGifs} from '../hooks/useGifs'
import useNearScreen from '../hooks/useNearScreen'

import debounce from 'just-debounce-it'

export default function SearchResults({ keyword }) {

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
        <div className="App-wrapper">
          <h3 className="App-title">
            {decodeURI(keyword)}
          </h3>
          <ListOfGifs gifs={gifs} />
          <button className="btn2" onClick={handleClick}>More Gifs About {decodeURI(keyword)} </button>
          <div id="visor" ref={externalRef}></div>
      </div>
    </>
  );
}
