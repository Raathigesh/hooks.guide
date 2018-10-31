import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 64px;
  padding-right: 64px;
`;

const SubTitle = styled.div`
  font-size: 20px;
`;

const Warning = styled.div`
  background-color: #fff0c5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 30px;
`;

const Highlight = styled.span`
  color: #2196f3;
`;

const Instructions = styled.div`
  margin-top: 30px;
`;
const Instruction = styled.div`
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom; 5px;
  border-left: 3px solid #ffc107;
`;

const Logo = styled.div`
  font-size: 35px;
  margin-bottom: 5px;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

export default function Landing() {
  return (
    <Container>
      <Content>
        <Logo>
          <Highlight>Hooks</Highlight>
          .guide
        </Logo>
        <SubTitle>
          A catalog of <Highlight>react hooks with live preview.</Highlight>
        </SubTitle>
        <Instructions>
          To showcase a hook
          <Instruction>
            📝 Document your hook in{" "}
            <a href="https://github.com/Raathigesh/hooks.guide/tree/master/public/docs">
              docs folder
            </a>{" "}
            using{" "}
            <a href="https://github.com/Raathigesh/hooks.guide/blob/master/public/docs/template.md">
              template.md
            </a>
          </Instruction>
          <Instruction>✅ Send a PR</Instruction>
        </Instructions>
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
