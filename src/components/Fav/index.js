import React from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "@reach/router";
import "./index.css";

export default function Fav({ id }) {
  const navigate = useNavigate();

  const { isLogged, addFav, favs } = useUser();

  const isFaved = favs.some((favId) => favId === id);

  const hanldeClick = () => {
    if (!isLogged) return navigate(`/login`, { replace: true });
    addFav({ id });
  };

  const [ label, emoji] = isFaved
    ? [ "Remove Gif from favorites", "❌"]
    : [ "Add Gif to favorites", "❤"];

  return (
    <button className={`gf__fav${isFaved ? "--dark" : ""}`} onClick={hanldeClick}>
      <span role="img" aria-label={label}>
        {emoji}
      </span>
    </button>
  );
}
