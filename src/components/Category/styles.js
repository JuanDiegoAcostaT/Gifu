import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { bps } from "../../styles/index";

export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;
  text-align: left;

  ${bps.greaterThanMobile} {
    text-align: right;
  }
`;

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  ${bps.greaterThanMobile} {
    justify-content: flex-end;
  }
`;

const genereteMultiColor = (props) => {
  const colorIndex = (props.index % 5) + 1;
  return `background-color: var(--brand-color_${colorIndex}) `;
};



export const CategoryListItem = styled.li`
  list-style: none;
  padding: 5px;
  margin: 3px;
  font-size: 20px;

  ${genereteMultiColor}
`;

export const CategoryLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`;
