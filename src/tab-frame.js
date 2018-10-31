import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  background-color: #001c35;
  color: white;
  font-size: 18px;
  font-weight: 600;
  width: 200px;
  border-radius: 5px 5px 0 0;
  padding: 5px;
  padding-bottom: 8px;
  box-shadow: 0px 0px 5px rgba(195, 22, 22, 0.03),
    10px 13px 47px rgb(171, 122, 121);
`;

export default function TabFrame({ title, children }) {
  return (
    <Wrapper>
      <Tab>{title}</Tab>
      {children}
    </Wrapper>
  );
}
