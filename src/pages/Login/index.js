import React from "react";
import { Link } from "@reach/router";
import Login from "../../components/Login/index";

export default function LoginPage() {
  return (
    <>
      <div className="login__title">
        <h2>Login</h2>
      <Login />
      <p>
        If you don't have an account, do create one{" "}
        <Link to="/register">Sign Up</Link>
      </p>
      </div>
    </>
  );
}
