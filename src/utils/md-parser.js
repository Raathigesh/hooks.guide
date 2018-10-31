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

function findContributors(nodes) {
  const index = nodes.findIndex(
    node => node.type === "heading" && node.text === "contributors"
  );

  if (index < 0) {
    return [];
  }

  return nodes
    .slice(index + 1)
    .map(node => node.text)
    .map(contributorString => {
      const tokens = contributorString.split("\n");
      return {
        name: tokens[0],
        avatar: tokens[1],
        url: tokens[2]
      };
    });
}

export function parse(code) {
  const nodes = marked.lexer(code).filter(item => item.type !== "space");

  return {
    name: findNode(nodes, "name"),
    reference: findNode(nodes, "reference"),
    hook: format(findNode(nodes, "hook")),
    usage: format(findNode(nodes, "usage")),
    contributors: findContributors(nodes) || []
  };
}
