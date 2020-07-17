import React from "react";
import { Link } from "@reach/router";
import Login from "../../components/Login/index";

export default function LoginPage() {
  return (
    <section>
      <h2>Login</h2>
      <Login />
      <p>
        If you don't have an account, do create one{" "}
        <Link to="/register">
          {" "}
          <br /> Sign Up
        </Link>
      </p>
    </section>
  );
}
