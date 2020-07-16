import React from "react";
import { Match } from "@reach/router";
import useUser from "../../hooks/useUser";
import { GifHeader, GifLink, GifButton } from "./styles";

export default function TopBar() {
  const { isLogged, logout } = useUser();

  const handleClick = () => {
    logout();
  };

  const content = isLogged ? (
    <GifButton onClick={handleClick}>LogOut</GifButton>
  ) : (
    <>
      <GifLink to="/login">Login</GifLink>
      <GifLink to="/register">Register</GifLink>
    </>
  );

  return (
    <GifHeader>
      <Match path="//:(login|register)">
        {(props) => (props.match ? null : content)}
      </Match>
    </GifHeader>
  );
}
