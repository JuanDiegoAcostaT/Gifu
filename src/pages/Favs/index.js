import React from "react";
import useUser from "../../hooks/useUser";
import Gif from "../../components/Gif/index";
import { ListOfGifsComponent } from "../../components/ListOfGifs/styles";
import { Link } from "@reach/router";

const Favorites = () => {
  const { favs, isLogged } = useUser();

  const getGif = (fav) => {
    return `https://media.giphy.com/media/${fav}/giphy.mp4`;
  };

  return (
    <>
      {!isLogged ? (
        <h2>
          Por Favor <Link to="/login">Inicia Sesión</Link> para guardar
          Favoritos💥
        </h2>
      ) : (
        <h2 style={{ paddingBottom: "80px" }}>Favorites💢</h2>
      )}
      <div className="App-wrapper">
        <ListOfGifsComponent>
          {favs.map((fav, index) => (
            <Gif id={fav} key={fav} index={index} mp4={getGif(fav)} />
          ))}
        </ListOfGifsComponent>
      </div>
    </>
  );
};

export default Favorites;
