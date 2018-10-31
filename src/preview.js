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

window.React = React;
const cache = createCache();
const docsResource = createResource(fetchDoc);

const Name = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

const Reference = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: #03a9f4;
`;

const SubTitle = styled.div`
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const ImproveThisDoc = styled.a`
  text-decoration: none;
  color: #03a9f4;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: flex-end;
`;

const Console = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    padding: 5px;
    background-color: #e6e6e6;
    color: #002240;
  }
`;

const RepoUrl =
  "https://github.com/Raathigesh/hooks.guide/tree/master/public/docs/";

export default function Preview(props) {
  const doc = docsResource.read(cache, props.item.path);
  const { name, reference, hook = null, usage, contributors } = parse(doc);
  console.log(name);

  const [nameValue] = useState(name);
  const [hookValue, setHook] = useState(hook);
  const [usageValue, setUsage] = useState(usage);

  useEffect(() => {
    const codeToExecute = `${hookValue ? hookValue : ""}${usageValue}`;

    execute(codeToExecute, {
      useState,
      ReactDOM,
      useCallback,
      useEffect,
      useReducer,
      useRef,
      useLayoutEffect,
      throttle
    });
  });

  return (
    <Flex column pr={4} pl={4} pt={0} auto>
      <Name>{nameValue}</Name>
      <Reference href={reference} target="_blank">
        {reference}
      </Reference>

      {hookValue && (
        <React.Fragment>
          <SubTitle>Hook implementation</SubTitle>
          <Editor code={hookValue} onChange={setHook} />
        </React.Fragment>
      )}
      <SubTitle>Usage</SubTitle>
      <Editor code={usageValue} onChange={setUsage} />
      <SubTitle>Live preview</SubTitle>

      <div id="preview-root" />
      <Console id="preview-console" />

      <Contributors contributors={contributors} />
      <Footer>
        <ImproveThisDoc href={`${RepoUrl}${props.item.path}`} target="_blank">
          💄 Improve this hook
        </ImproveThisDoc>
      </Footer>
    </Flex>
  );
}
