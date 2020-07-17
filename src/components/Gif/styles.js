import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { bps } from "../../styles/index";

const genereteMultiColor = (props) => {
  const colorIndex = (props.index % 5) + 1;
  return `background-color: var(--brand-color_${colorIndex});`;
};

const genereteHoverColor = (props) => {
  const colorIndex = (props.index % 5) + 1;
  return `
    box-shadow: 0 0 0 var(--gifShadow-size) var(--brand-color_${colorIndex});
    `;
};

const genereteTitleColor = (props) => {
  const colorIndex = (props.index % 5) + 1;
  return `
  background-color: var(--brand-color_${colorIndex});
  color: white;
  `;
};

export const GifComponent = styled.div`
  --gifShadow-size: var(--gridList-gap, 6px);
  margin-bottom: 0.5em;
  position: relative;
  margin-bottom: 0;
  height: 100%;
  &:nth-of-type(11n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }
  &:nth-of-type(8n + 1) {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }

  &:nth-of-type(10n + 3) {
    grid-column: span 2;
    grid-row: span 1;
  }
  &:hover {
    ${genereteHoverColor}
  }
  &:hover [data-comp="litem"] {
    ${genereteTitleColor}
  }

  ${genereteMultiColor}

  ${bps.commonMobiles} {
    &:nth-of-type(11n + 1),
    &:nth-of-type(8n + 1),
    &:nth-of-type(10n + 3) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`;

export const GifButtons = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;

export const GifLink = styled(Link)`
  color: #000;
  display: block;
  text-decoration: none;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const GifTitle = styled.h4`
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  font-size: 12px;
  color: #fff;
  margin: 0;
  position: absolute;
`;

export const GifVideo = styled.video`
  width: 100%;
  object-fit: contain;
  vertical-align: top;
  height: inherit;
  object-fit: cover;
`;
