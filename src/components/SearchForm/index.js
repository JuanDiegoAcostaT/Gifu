import React from "react";
import { navigate } from "@reach/router";
import "./SearchForm.module.css";

export default function SearchForm() {
  return (
    <div>
      <form
        className="c-search"
        onSubmit={(event) => {
          event.preventDefault();
          const keyword = event.target.elements[0].value;
          event.target.reset();
          navigate(`/search/${keyword}`);
        }}
      >
        <input
          className="c-search-input"
          id="search"
          name="search"
          placeholder="Search a Gif...."
          type="text"
        />
        <button className="c-search-btn">Search</button>
      </form>
    </div>
  );
}
