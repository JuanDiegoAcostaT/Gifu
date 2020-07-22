import { useContext, useCallback, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
import addFavService from "../services/addFav";
import deleteFavService from '../services/deleteFav'

export default function useUser() {
  const { jwt, setJwt, favs, setFavs } = useContext(Context);
  const [state, setstate] = useState({
    loading: false,
    error: false,
  });

  const login = useCallback(
    ({ username, password }) => {
      setstate({
        loading: true,
        error: false,
      });
      loginService({ username, password })
        .then((jwt) => {
          window.sessionStorage.setItem("jwt", jwt);
          setstate({
            loading: false,
            error: false,
          });
          setJwt(jwt);
        })
        .catch((err) => {
          window.sessionStorage.removeItem("jwt");
          setstate({ loading: false, error: true });
          console.log(err);
        });
    },
    [setJwt]
  );

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, jwt })
        .then((favs) => setFavs(favs))
        .catch((err) => console.log(err));
    },
    [jwt, setFavs]
  );
  
  const deleteFav = useCallback(
    ({ id }) => {
      deleteFavService({ id, jwt })
        .then((favs) => setFavs(favs))
        .catch((err) => console.log(err));
    },
    [jwt, setFavs]
  );


  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJwt(null);
  }, [setJwt]);

  return {
    deleteFav,
    addFav,
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    isError: state.error,
    login,
    logout,
  };
}
