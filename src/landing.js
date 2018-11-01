import React from "react";
import styled from "styled-components";
import LogoComp from "./logo";
import { highlightColor } from "./theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 64px;
  @media (max-width: 700px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Warning = styled.div`
  background-color: #fff0c5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 30px;
`;

const Highlight = styled.span`
  color: ${highlightColor};
`;

const Instructions = styled.div`
  margin-top: 25px;
`;
const Instruction = styled.div`
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom; 5px;
`;

const Logo = styled.div`
  font-size: 35px;
  margin-bottom: 5px;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

const RepoLink = styled.div`
  margin-top: 25px;
  display: flex;
  margin-left: -2px;
  a {
    color: blue;
    text-decoration: none;
    font-weight: 700;
    padding-top: 2px;
  }
`;

export default function Landing() {
  return (
    <Container>
      <Content>
        <LogoComp />
        <SubTitle>
          Collection of <Highlight>React hooks</Highlight> curated by the
          community
        </SubTitle>
        <Instruction>💡 All examples are interactive.</Instruction>

        <Instructions>
          Contribute
          <Instruction>
            📝 Document your hook in{" "}
            <a href="https://github.com/Raathigesh/hooks.guide/tree/master/public/docs">
              docs folder
            </a>
            . Refer{" "}
            <a href="https://github.com/Raathigesh/hooks.guide/blob/master/public/docs/template.md">
              template.md.
            </a>
          </Instruction>
          <Instruction>✅ Send a PR</Instruction>
        </Instructions>
        <RepoLink>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            space="preserve"
            viewBox="0 0 50 50"
            width="30"
            height="23"
          >
            <path
              fill="black"
              d="M25,2.5C12.2,2.5,1.9,12.8,1.9,25.6c0,10.2,6.6,18.9,15.8,21.9c1.2,0.2,1.5-0.5,1.5-1.1c0-0.5,0-2.1,0-4c-6.4,1.4-7.8-3-7.8-3c-1-2.7-2.6-3.4-2.6-3.4C6.7,34.6,9,34.6,9,34.6c2.3,0.2,3.5,2.4,3.5,2.4c2.1,3.5,5.4,2.5,6.7,1.9c0.2-1.5,0.8-2.5,1.5-3.1c-5.1-0.6-10.5-2.6-10.5-11.4c0-2.5,0.9-4.6,2.4-6.2c-0.2-0.6-1-2.9,0.2-6.1c0,0,1.9-0.6,6.3,2.4c1.8-0.5,3.8-0.8,5.8-0.8s3.9,0.3,5.8,0.8c4.4-3,6.3-2.4,6.3-2.4c1.3,3.2,0.5,5.5,0.2,6.1c1.5,1.6,2.4,3.7,2.4,6.2c0,8.9-5.4,10.8-10.5,11.4c0.8,0.7,1.6,2.1,1.6,4.3c0,2.9,0,5.6,0,6.4c0,0.6,0.4,1.3,1.5,1.1C41.4,44.5,48,35.9,48,25.7C48.1,12.8,37.8,2.5,25,2.5z"
            />
          </svg>
          <a href="https://github.com/Raathigesh/hooks.guide" target="_blank">
            Visit repository
          </a>
        </RepoLink>
        <Warning>
          Hooks are a new feature proposal that lets you use state and other
          React features without writing a class. They’re currently in React
          v16.7.0-alpha and being discussed in{" "}
          <a href="https://github.com/reactjs/rfcs/pull/68">an open RFC</a>.
        </Warning>
      </Content>
    </Container>
  );
}
