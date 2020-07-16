import styled from "@emotion/styled";
import { bps } from "../../styles/index";

export const ModalComponent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000000000;
  text-align: center;
`;

export const ModalContent = styled.div`
  border-radius: 10px;
  background-color: var(--theme-body-bg);
  width: 300px;
  padding: 10px 20px 0 20px;
  height: 95vh;
  margin: 5px auto;
  position: relative;
  -webkit-box-shadow: -6px -7px 38px 16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px -7px 38px 16px rgba(0, 0, 0, 0.75);
  box-shadow: -6px -7px 38px 16px rgba(0, 0, 0, 0.75);

  ${bps.extraSmallMobile} {
    padding: 2px;
  }
`;

export const ModalButton = styled.button`
  display: block;
  border: none;
  background-color: var(--theme-body-bg);
  margin-bottom: 22px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;
