import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import hooks from "./docs.js";
import LogoComp from "./logo";
import { highlightColor } from "./theme";

import "typeface-nunito";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 64px;
  border-right: 1px solid #edeeee;
  padding-right: 20px;
  padding-bottom: 50px;
  @media (max-width: 700px) {
    order: 2;
    padding-left: 10px;
    border-right: none;
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
  color: ${highlightColor};
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
  margin: 30px 0 10px;
`;

const Item = styled.div`
  cursor: pointer;

  a {
    color: black;

    text-decoration: none;
    &:hover {
      font-weight: 700;
      color: ${highlightColor};
    }
  }
`;

export default function() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <LogoComp size={25} />
        </Link>
      </Logo>
      {Object.entries(hooks)
        .filter(([key]) => key !== "community")
        .map(([key, value]) => {
          return (
            <div>
              <SectionHeader>{key}</SectionHeader>
              {value.map(item => {
                return (
                  <Item>
                    <NavLink
                      activeStyle={{ color: highlightColor }}
                      to={`/${key}/${item.name}`}
                    >
                      {item.name}
                    </NavLink>
                  </Item>
                );
              })}
            </div>
          );
        })}
      {
        <div>
          <SectionHeader>Community</SectionHeader>
          {hooks.community.map(item => {
            return (
              <Item>
                <Link to={`/community/${item.name}`}>{item.name}</Link>
              </Item>
            );
          })}
        </div>
      }
    </Container>
  );
}
