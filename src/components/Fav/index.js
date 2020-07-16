import React, { useState, useCallback } from "react";
import useUser from "../../hooks/useUser";
import Modal from "../Modal/index";
import Login from "../Login/index";
import { GifFav } from './styles'

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
      <GifFav
        bgColor={ isFaved ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
        bgHoverColor={ isFaved ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)" }
        onClick={hanldeClick}
      >
        <span role="img" aria-label={label}>
          {emoji}
        </span>
      </GifFav>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
