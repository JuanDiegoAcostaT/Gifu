import styled from "@emotion/styled";
import { bps } from "../../styles/index";

var Column = "250px";
var Rows = "250px";
var Gap = "6px";

export const ListOfGifsComponent = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(${Column}, 1fr));
  grid-auto-rows: ${Rows};
  grid-template-rows: masonry;
  grid-auto-flow: row dense;
  grid-gap: ${Gap};
  gap: ${Gap};
  align-items: center;

  ${bps.lessThanMobile} {
    ${((Column = "180px"), (Rows = "200px"))}
  }

  ${bps.olderThanMobile} {
    ${((Column = "300px"), (Rows = "210px"))}
  }
`;
