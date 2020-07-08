import React from "react";
import { Link, Match } from "@reach/router";
import "./styles.css";
import useUser from "../../hooks/useUser";

export default function TopBar() {
  const { isLogged, logout } = useUser();

  const handleClick = () => {
    logout();
  };

  const content = isLogged ? (
    <button className="btn3" onClick={handleClick}>
      LogOut
    </button>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );

  return (
    <header className="gf-header">
      <Match path="/login">{(props) => (props.match ? null : content)}</Match>
    </header>
  );
}
