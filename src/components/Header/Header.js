import React from "react";
import { Link } from "@reach/router";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link className="main__title" to="/">
        <h1>Gifú</h1>
      </Link>
    </div>
  );
}
