import React from "react";
import {  navigate } from "@reach/router";


export default function SearchForm() {
  return (
    <div>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          const keyword = event.target.elements[0].value;
          event.target.reset();
          navigate(`/search/${keyword}`);
        }}
      >
        <input
          className="gif__input"
          placeholder="Search a Gif...."
          type="text"
        />
        <button>Search</button>
      </form>
    </div>
  );
}
