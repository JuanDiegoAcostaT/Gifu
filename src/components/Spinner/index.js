import React from "react";
import {
  Roller,
  RollerDiv1,
  RollerDiv2,
  RollerDiv3,
  RollerDiv4,
  RollerDiv5,
  RollerDiv6,
  RollerDiv7,
  RollerDiv8,
} from "./styles";

export default function LoadingSpinner() {
  return (
    <>
      <Roller>
        <RollerDiv1></RollerDiv1>
        <RollerDiv2></RollerDiv2>
        <RollerDiv3></RollerDiv3>
        <RollerDiv4></RollerDiv4>
        <RollerDiv5></RollerDiv5>
        <RollerDiv6></RollerDiv6>
        <RollerDiv7></RollerDiv7>
        <RollerDiv8></RollerDiv8>
      </Roller>
    </>
  );
}
