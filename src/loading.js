import React from "react";
import { createGlobalStyle } from "styled-components";
import { highlightColor } from "./theme";

const SpinnerStyle = createGlobalStyle`
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  align-self: center;
    margin-left: auto;
    margin-right: auto;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${highlightColor};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
`;

export default function Loading() {
  return (
    <React.Fragment>
      <SpinnerStyle />
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </React.Fragment>
  );
}
