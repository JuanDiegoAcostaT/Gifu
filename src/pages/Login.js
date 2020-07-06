import React, { useState, useEffect } from "react";
import { useNavigate } from "@reach/router";
import useUser from "../hooks/useUser";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, login, isError, isLoginLoading } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigate("/", { replace: true });
    }
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="conatiner__form--login">
      <h2 className="login__title">Sign in</h2>
      {isError && <strong>User or Password are invalid.</strong>}
      {isLoginLoading && <strong>Checking Credentials....</strong>}
      {!isLoginLoading && (
        <div className="login__container">
          <form className="login-form" onSubmit={handleSubmit}>
            <label>User</label>
            <input
              required
              onChange={handleUsername}
              type="text"
              placeholder="username"
              value={username}
            ></input>
            <label>Password</label>
            <input
              required
              onChange={handlePassword}
              type="password"
              placeholder="password"
              value={password}
            ></input>
            <button>Login</button>
          </form>
        </div>
      )}
    </div>
  );
}
