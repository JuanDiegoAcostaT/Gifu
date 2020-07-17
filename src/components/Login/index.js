import React, { useState, useEffect } from "react";
import { useNavigate } from "@reach/router";
import useUser from "../../hooks/useUser";
import ButtonComponent from "../../components/Button/index";
import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginInput,
} from "./styles";

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
    <LoginFormContainer>
      {isError && <strong>User or Password are invalid.</strong>}
      {isLoginLoading && <strong>Checking Credentials....</strong>}
      {!isLoginLoading && (
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit}>
            <label htmlFor="username">User</label>
            <LoginInput
              id="username"
              required
              onChange={handleUsername}
              type="text"
              placeholder="username"
              value={username}
            ></LoginInput>
            <label htmlFor="password">Password</label>
            <LoginInput
              id="password"
              required
              onChange={handlePassword}
              type="password"
              placeholder="password"
              value={password}
            ></LoginInput>
            <ButtonComponent>Login</ButtonComponent>
            {isLogged && <p>you successfully logged in 💚</p>}
          </LoginForm>
        </LoginContainer>
      )}
    </LoginFormContainer>
  );
}
