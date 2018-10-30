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
  max-width: 700px;
`;

const Heading = styled.div`
  font-size: 35px;
`;

const SubTitle = styled.div`
  font-size: 20px;
`;

const Warning = styled.div`
  background-color: #fff0c5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const Highlight = styled.span`
  background-color: #ffc107;
  border-radius: 4px;
  padding-right: 4px;
  padding-left: 4px;
`;

const Instructions = styled.div``;

export default function Landing() {
  return (
    <Container>
      <Content>
        <Heading>Hooks.wiki</Heading>
        <SubTitle>
          A catalog of <Highlight>react hooks with live preview.</Highlight>
        </SubTitle>
        <Instructions>
          You can add a hook here
          <ul>
            <li>
              Copy the template from
              https://github.com/Raathigesh/hooks.wiki/public/docs/template.md
              to a folder
            </li>
            <li>
              Rename the teamplate.md to your hook's name and document your hook
            </li>
            <li>Send a PR</li>
          </ul>
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
