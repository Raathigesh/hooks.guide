import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useRef,
  useLayoutEffect
} from "react";
import { Flex } from "reflexbox";
import ReactDOM from "react-dom";
import styled from "styled-components";
import throttle from "lodash.throttle";
import { createCache, createResource } from "react-cache";
import { execute } from "./utils/executor";
import { fetchDoc } from "./utils/fetcher";
import { parse } from "./utils/md-parser";
import Editor from "./editor";
import Contributors from "./contributors";
import TabFrame from "./tab-frame";
import { highlightColor } from "./theme";

window.React = React;
const cache = createCache();
const docsResource = createResource(fetchDoc);

const Container = styled.div`
  flex-direction: column;
  flex: 1 1 auto;
  padding-left: 70px;
  @media (max-width: 700px) {
    padding-left: 10px;
  }
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

const Reference = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: ${highlightColor};
`;

const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ImproveThisDoc = styled.a`
  text-decoration: none;
  color: ${highlightColor};
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const Console = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #002240;
  padding: 7px;
  border-radius: 0 5px 5px 5px;
  color: white;
  max-width: 900px;
`;

const ConsoleItem = styled.div`
  color: wheat;
`;

const Menus = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 15px;
  top: 5px;
  z-index: 99;
  font-size: 13px;
`;
const Menu = styled.div`
  display: inline-block;
  color: wheat;
  right: 0;
  padding: 2px;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const RepoUrl =
  "https://github.com/Raathigesh/hooks.guide/tree/master/public/docs/";

export default function Preview(props) {
  const doc = docsResource.read(cache, props.item.path);
  const {
    name,
    reference,
    hook = null,
    usage,
    contributors,
    description
  } = parse(doc);

  const [nameValue] = useState(name);
  const [hookValue, setHook] = useState(hook);
  const [usageValue, setUsage] = useState(usage);
  const [consoleLogs, setLogs] = useState([]);

  useEffect(
    () => {
      const codeToExecute = `${hookValue ? hookValue : ""}${usageValue}`;

      execute(
        codeToExecute,
        {
          useState,
          ReactDOM,
          useCallback,
          useEffect,
          useReducer,
          useRef,
          useLayoutEffect,
          throttle
        },
        log => {
          setLogs([...consoleLogs, log]);
        }
      );
    },
    [hookValue, usageValue]
  );

  return (
    <Container>
      <Header>
        <Name>{nameValue}</Name>
        <Reference href={reference} target="_blank">
          {reference}
        </Reference>
      </Header>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {hookValue && (
        <React.Fragment>
          <Editor
            code={hookValue}
            onChange={setHook}
            title="💡 Implementation"
          />
        </React.Fragment>
      )}
      <Editor code={usageValue} onChange={setUsage} title="🚀 Usage" />

      <TabFrame title="⚡Preview">
        <div id="preview-root" />
      </TabFrame>

      {consoleLogs.length > 0 && (
        <TabFrame title="🚨 console">
          <Console>
            <Menus>
              <Menu
                onClick={() => {
                  setLogs([]);
                }}
              >
                Clear
              </Menu>
            </Menus>
            {consoleLogs.map(entry => (
              <ConsoleItem>{entry}</ConsoleItem>
            ))}
          </Console>
        </TabFrame>
      )}
      <Footer>
        <ImproveThisDoc href={`${RepoUrl}${props.item.path}`} target="_blank">
          💄 Improve this hook
        </ImproveThisDoc>
      </Footer>
      <Contributors contributors={contributors} />
    </Container>
  );
}
