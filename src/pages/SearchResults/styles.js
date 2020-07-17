import styled from "@emotion/styled";
import { bps } from "../../styles/index";

export const Button = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background: var(--brand-color_3);
  border: 0;
  color: #fff;
  padding-top: 10px;
  ${bps.commonMobiles} {
    display: none;
  }
`;

export const Visor = styled.div`
  display: none;

  ${bps.commonMobiles} {
    display: block;
  }
`;
