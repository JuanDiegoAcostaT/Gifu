import React from "react";
import { useNavigate } from "@reach/router";
import "./SearchForm.module.css";
import { LANGS, RATINGS } from "./services";
import { useForm } from "./hook";

export default function SearchForm({
  initialKeyword = "",
  initialRating = "g",
  initalLang = "es",
}) {
  const navigate = useNavigate();

  const {
    keyword,
    lang,
    rating,
    times,
    updateKeyword,
    updateRating,
    updateLang,
  } = useForm({ initialRating, initialKeyword, initalLang });
  /*     No uso estos dos estados de abajo porque paso a usar useReducer con el hook de arriba useForm */
  /*   const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword)); */
  //const [rating, setRating] = useState(initialRating);
  /*   const [times, setTimes] = useState(0); */

  const handleChangeKeyword = (e) => {
    updateKeyword(e.target.value);
  };

  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };

  const handleChangeLang = (e) => {
    updateLang(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}/${lang}`, { replace: true });
  };

  return (
    <form className="c-search" onSubmit={handleOnSubmit}>
      <div className="c-container">
      <button className="c-search-btn">Search</button>
        <input
          className="c-search-input"
          id="search"
          name="search"
          placeholder="Search a Gif...."
          type="text"
          onChange={handleChangeKeyword}
          value={keyword}
        />
        <select
          value={rating}
          onChange={handleChangeRating}
          className="c-search-select"
        >
          <option disabled>Rating Type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <select
          value={lang}
          onChange={handleChangeLang}
          className="c-search-select"
        >
          <option disabled>Language</option>
          {LANGS.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
        <small>{times}</small>
      </div>

    </form>
  );
}
