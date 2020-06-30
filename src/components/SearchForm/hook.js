import { useReducer } from "react";
import { LANGS, RATINGS } from "./services";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
  UPDATE_LANG: "update_lang",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload,
        times: state.times + 1,
      };
    default:
      return state;
  }
};

export const useForm = ({
  initialRating = RATINGS[0],
  initialKeyword = "",
  initalLang = LANGS[1],
}) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    lang: initalLang,
    times: 0,
  });

  const { keyword, times, rating, lang } = state;

  return {
    keyword,
    rating,
    lang,
    times,
    updateKeyword: (keyword) =>
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: (rating) =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
    updateLang: (lang) =>
      dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang }),
  };
};
