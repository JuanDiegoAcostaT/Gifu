import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "@reach/router";
import useUser from "../../hooks/useUser";
import "./styles.css";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, login, isError, isLoginLoading } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigate("/", { replace: true });
      onLogin && onLogin();
    }
  }, [isLogged, onLogin, navigate]);

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
      {isError && <strong>User or Password are invalid.</strong>}
      {isLoginLoading && <strong>Checking Credentials....</strong>}
      {!isLoginLoading && (
        <div className="login__container">
          <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="username">User</label>
            <input
              id="username"
              required
              onChange={handleUsername}
              type="text"
              placeholder="username"
              value={username}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              required
              onChange={handlePassword}
              type="password"
              placeholder="password"
              value={password}
            ></input>
            <button>Login</button>
            {isLogged && <p>you successfully logged in 💚</p>}
          </form>
        </div>
      )}
    </div>
  );
}
