import React from "react";
import { useNavigate } from "@reach/router";
import { LANGS, RATINGS } from "./services";
import { useForm } from "./hook";
import {
  Search,
  SearchButton,
  SearchInput,
  SearchContainer,
  SearchSelect,
} from "./styles";

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
    <Search onSubmit={handleOnSubmit}>
      <SearchContainer>
        <SearchButton>Search</SearchButton>
        <SearchInput
          id="search"
          name="search"
          placeholder="Search a Gif...."
          type="text"
          onChange={handleChangeKeyword}
          value={keyword}
        />
        <SearchSelect value={rating} onChange={handleChangeRating}>
          <option disabled>Rating Type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </SearchSelect>
        <SearchSelect value={lang} onChange={handleChangeLang}>
          <option disabled>Language</option>
          {LANGS.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </SearchSelect>
        {/* <small>{times}</small> */}
      </SearchContainer>
    </Search>
  );
}
