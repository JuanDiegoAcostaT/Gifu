import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const RollerAnimation = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Roller = styled.div`
  display: inline-block;
  justify-content: center;
  padding-left: 40%;
  width: 80px;
  height: 80px;
`;

const RollerCommon = `
  animation: ${RollerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
`;

export const RollerDiv1 = styled.div`
  ${RollerCommon}
  animation-delay: -0.036s;
  &:after {
    top: 63px;
    left: 63px;
  }
`;
export const RollerDiv2 = styled.div`
  ${RollerCommon}
  animation-delay: -0.072s;
  &:after {
    top: 68px;
    left: 56px;
  }
`;
export const RollerDiv3 = styled.div`
  ${RollerCommon}
  animation-delay: -0.108s;
  &:after {
    top: 71px;
    left: 48px;
  }
`;
export const RollerDiv4 = styled.div`
  ${RollerCommon}
  animation-delay: -0.144s;
  &:after {
    top: 72px;
    left: 40px;
  }
`;
export const RollerDiv5 = styled.div`
  ${RollerCommon}
  animation-delay: -0.18s;
  &:after {
    top: 71px;
    left: 32px;
  }
`;
export const RollerDiv6 = styled.div`
  ${RollerCommon}
  animation-delay: -0.216s;
  &:after {
    top: 68px;
    left: 24px;
  }
`;
export const RollerDiv7 = styled.div`
  ${RollerCommon}
  animation-delay: -0.252s;
  &:after {
    top: 63px;
    left: 17px;
  }
`;
export const RollerDiv8 = styled.div`
  ${RollerCommon}
  animation-delay: -0.288s;
  &:after {
    top: 56px;
    left: 12px;
  }
`;
