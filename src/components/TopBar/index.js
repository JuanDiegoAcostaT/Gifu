import React from "react";
import { Link } from "@reach/router";
import "./index.css";
import useUser from "../../hooks/useUser";

export default function TopBar() {
  const { isLogged, logout } = useUser();

  const handleClick = () => {
    logout()
  }

  return (
    <header className="gf-header">
      {isLogged ? (
        <button className='btn3' onClick={handleClick} >LogOut</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
}
