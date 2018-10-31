const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");

export function format(code) {
  return prettier.format(code, {
    parser: "babylon",
    plugins: [parser]
  });
}
