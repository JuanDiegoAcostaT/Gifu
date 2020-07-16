import React from "react";
import { Link } from "@reach/router";
import { HeaderComponent, Logo } from './styles'

export default function Header() {
  return (
    <HeaderComponent>
      <Link className="main__title" to="/">
        <Logo
          className="logo"
          src="https://i.imgur.com/lAYEJRF.png"
          alt="Logo"
        />
      </Link>
    </HeaderComponent>
  );
}
