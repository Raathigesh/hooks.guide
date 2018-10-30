import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import hooks from "./docs.json";

import "typeface-nunito";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 64px;
  @media (max-width: 700px) {
    order: 2;
  }
`;

const Logo = styled.div`
  font-size: 25px;
  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const Highlight = styled.span`
  color: #2196f3;
`;

const SectionHeader = styled.div`
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-family: "League Spartan", sans-serif;
  line-height: 1.1;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 30px 0 15px;
`;

const Item = styled.div`
  cursor: pointer;

  a {
    color: black;

    text-decoration: none;
    &:hover {
      font-weight: 700;
      color: #03a9f4;
    }
  }
`;

export default function() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <Highlight>Hooks</Highlight>
          .guide
        </Link>
      </Logo>
      {Object.entries(hooks).map(([key, value]) => {
        return (
          <div>
            <SectionHeader>{key}</SectionHeader>
            {value.map(item => {
              return (
                <Item>
                  <Link to={`/${key}/${item.name}`}>{item.name}</Link>
                </Item>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}
