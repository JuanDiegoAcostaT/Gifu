import React from "react";
import { Link } from "@reach/router";
import Register from "../../components/Register/index";

export default function LoginPage() {
  return (
    <section>
      <h2>Register</h2>
      <Register />
      <p>
        If you already have an account, get Login{" "}
        <Link to="/login">
          {" "}
          <br /> Login
        </Link>
      </p>
    </section>
  );
}
