import styled from "@emotion/styled";
import { Link } from "@reach/router";

export const GifHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 0px 0px;
`;

export const GifLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  margin: 0 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export const GifButton = styled.button`
  height: 35px;
  width: 100px;
  background: var(--brand-color_3);
  border: 0;
  border-radius: 10px;
  color: #fff;
  transition: all 0.2s ease;
  &:hover {
    background: #fff;
    color: var(--brand-color_3);
    cursor: pointer;
  }
`;
