import React from "react";
import { LinkStyled, Button } from "./styles";

const ButtonComponent = ({ children, href }) => {
  return href ? (
    <LinkStyled to={href}>{children}</LinkStyled>
  ) : (
    <Button>{children}</Button>
  );
};

export default ButtonComponent;
