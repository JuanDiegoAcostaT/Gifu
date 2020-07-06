import React, { useState, useEffect } from "react";
import getFavs from '../services/getFavs'

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if(!jwt) return setFavs([])
    getFavs({ jwt }).then(setFavs)
  }, [jwt])

  return (
    <Context.Provider value={{ favs, setFavs, jwt, setJwt }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
