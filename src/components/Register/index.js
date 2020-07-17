import React, { useState } from "react";
import register from "../../services/register";
import { Formik } from "formik";
import { useNavigate } from "@reach/router";
import ButtonComponent from "../Button/index";
import {
  RegisterContainer,
  RegisterError,
  RegisterForm,
  RegisterFormContainer,
  RegisterInput,
} from "./styles";

export default function Register() {
  const navigate = useNavigate();

  const [registered, setRegistered] = useState(false);

  const validateFields = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required username";
    }
    if (!values.password) {
      errors.password = "Required password";
    } else if (values.password.length < 5) {
      errors.password = "The password must be longer, for security.";
    }
    return errors;
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <>
      <RegisterFormContainer>
        <Formik
          initialValues={initialValues}
          validate={validateFields}
          onSubmit={(values, { setFieldError }) => {
            return register(values)
              .then(() => {
                setRegistered(true);
                setTimeout(function () {
                  navigate("/login", { replace: true });
                }, 5000);
              })
              .catch(() => {
                setFieldError("username", "This username is invalid");
              });
          }}
        >
          {({ errors, isSubmitting }) => (
            <RegisterContainer>
              {registered ? (
                <RegisterForm>
                  <p>you successfully Registered in 💚</p>
                  <small>in 5 seconds you will be redirected .....</small>{" "}
                </RegisterForm>
              ) : (
                <RegisterForm>
                  <label htmlFor="username">User</label>
                  <RegisterInput
                    border={
                      errors.username ? "4px solid var(--theme-body-bg);" : "0"
                    }
                    required
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username..."
                  ></RegisterInput>
                  <RegisterError
                    name="username"
                    component="small"
                  />

                  <label htmlFor="password">Password</label>
                  <RegisterInput
                    required
                    border={
                      errors.username ? "4px solid var(--theme-body-bg);" : "0"
                    }
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password..."
                  ></RegisterInput>
                  <RegisterError
                    name="password"
                    component="small"
                  />
                  <ButtonComponent disabled={isSubmitting} type="submit">
                    Sign Up
                  </ButtonComponent>
                </RegisterForm>
              )}
            </RegisterContainer>
          )}
        </Formik>
      </RegisterFormContainer>
    </>
  );
}
