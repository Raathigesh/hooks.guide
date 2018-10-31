import * as marked from "marked";
import { format } from "./format-code";

function findNode(nodes, text) {
  const index = nodes.findIndex(
    node => node.type === "heading" && node.text === text
  );

  if (index === -1) {
    return "";
  }

  return nodes[index + 1].text;
}

export function parse(code) {
  const nodes = marked.lexer(code).filter(item => item.type !== "space");

  return {
    name: findNode(nodes, "name"),
    reference: findNode(nodes, "reference"),
    hook: format(findNode(nodes, "hook")),
    usage: format(findNode(nodes, "usage"))
  };
}
