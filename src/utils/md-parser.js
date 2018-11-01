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

function getDescription(nodes) {
  const indexOfDescription = nodes.findIndex(
    node => node.type === "heading" && node.text === "description"
  );

  if (indexOfDescription < 0) {
    return null;
  }

  const descriptionTokens = [];
  for (let i = indexOfDescription + 1; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type === "heading" && node.depth === 1) {
      break;
    }
    descriptionTokens.push(node);
  }
  //links: {}
  descriptionTokens.links = {};
  return marked.parser(descriptionTokens);
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

  const result = {
    name: findNode(nodes, "name"),
    reference: findNode(nodes, "reference"),
    hook: format(findNode(nodes, "hook")),
    usage: format(findNode(nodes, "usage")),
    contributors: findContributors(nodes) || [],
    description: getDescription(nodes)
  };

  return result;
}
