import React, { useState } from "react";
import register from "../../services/register";
import "./styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "@reach/router";

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
      <div className="conatiner__form--register">
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
            <div className="register__container">
              {registered ? (
                <div className='register__form'>
                  <p>you successfully Registered in 💚</p>
                  <small>in 5 seconds you will be redirected .....</small>{" "}
                </div>
              ) : (
                <Form className="register__form">
                  <label htmlFor="username">User</label>
                  <Field
                    className={errors.username ? "error" : ""}
                    required
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username..."
                  ></Field>
                  <ErrorMessage
                    style={{ fontSize: "10px" }}
                    name="username"
                    component="small"
                  />
                  {/* {errors.username && (
                    <span className="errors__">
                      <p>{errors.username}</p>
                    </span>
                  )} */}
                  <label htmlFor="password">Password</label>
                  <Field
                    required
                    className={errors.password ? "error" : ""}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password..."
                  ></Field>
                  <ErrorMessage
                    style={{ fontSize: "10px" }}
                    name="password"
                    component="small"
                  />
                  {/* {errors.password && (
                    <span className="errors__">
                      <p>{errors.password}</p>
                    </span>
                  )} */}
                  <button
                    className="btn__register"
                    disabled={isSubmitting}
                    type="submit"
                    className="btn"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}
