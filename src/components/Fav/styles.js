import styled from "@emotion/styled";

export const GifFav = styled.button`
  transition: all 0.3s ease;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: red;
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: ${(props) => props.bgHoverColor};
  }
`;
