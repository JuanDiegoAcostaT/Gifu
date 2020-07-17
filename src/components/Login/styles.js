import styled from "@emotion/styled";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 80%;
  align-items: center;
  border: 2px solid whitesmoke;
  border-radius: 5px;
  background-color: var(--brand-color_3);
  -webkit-box-shadow: -6px -7px 38px 16px rgba(49, 46, 46, 0.75);
  -moz-box-shadow: -6px -7px 38px 16px rgba(0, 0, 0, 0.75);
  box-shadow: -6px -7px 38px 16px rgba(0, 0, 0, 0.75);
`;

export const LoginForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LoginInput = styled.input`
  padding: 10px 20px 10px 20px;
  margin: 15px;
  border: 0;
  border-radius: 10px;
`;
