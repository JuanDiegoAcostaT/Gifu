import React, { useState, useCallback } from "react";
import useUser from "../../hooks/useUser";
import Modal from "../Modal/index";
import Login from "../Login/index";
import "./styles.css";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some((favId) => favId === id);

  const hanldeClick = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleLogin = () => {
    setShowModal(false);
  };

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤"];

  return (
    <>
      <button
        className={`gf__fav${isFaved ? "--dark" : ""}`}
        onClick={hanldeClick}
      >
        <span role="img" aria-label={label}>
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
