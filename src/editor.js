import React from "react";
import AceEditor from "react-ace";
import styled from "styled-components";
import "brace";
import "brace/mode/jsx";
import "brace/mode/html";
import "brace/theme/cobalt";
import { format } from "./format-code";

const Container = styled.div`
  position: relative;
`;

const Menus = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 25px;
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
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export default function HookEditor({ code, onChange }) {
  const height = code.split("\n").length * 19;
  return (
    <Container>
      <Menus>
        <Menu
          onClick={() => {
            onChange(format(code));
          }}
        >
          Pretty
        </Menu>
      </Menus>
      <AceEditor
        mode="javascript"
        value={code}
        theme="cobalt"
        onChange={onChange}
        fontSize={15}
        showGutter={false}
        name="UNIQUE_ID_OF_DIV"
        height={`${height}px`}
        width="100%"
        editorProps={{ $blockScrolling: true }}
        style={{ borderRadius: "5px" }}
      />
    </Container>
  );
}
