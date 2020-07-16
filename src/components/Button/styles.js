import { Link } from "@reach/router";
import styled from "@emotion/styled";

export const common = `padding: 10px 30px 10px 30px;
border: 0;
border-radius: 10px;
transition: all 0.2s ease;
background-color: ${(props) => props.theme.colors.primary};
color: ${(props) => props.theme.colors.textColor};
margin: 20px;
text-decoration : none;

:hover {
  cursor: pointer;
  padding: 12px 35px 12px 35px;
  color: var(--brand-color_2);
  background-color: white;
}

[disabled] {
  opacity: 0.3;
  pointer-events: none;
}`;

export const LinkStyled = styled(Link)`
  ${common}
`;

export const Button = LinkStyled.withComponent("button");
