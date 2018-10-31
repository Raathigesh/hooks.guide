// This is a rip-off of https://github.com/pveyes/raw.macro

const { createMacro } = require("babel-plugin-macros");
const getDocs = require("./generate-docs-list");

const create = createMacro(rawMacros);

function rawMacros({ references, state, babel }) {
  references.default.forEach(referencePath => {
    if (referencePath.parentPath.type === "CallExpression") {
      requireRaw({ referencePath, state, babel });
    } else {
      throw new Error(
        `This is not supported: \`${referencePath
          .findParent(babel.types.isExpression)
          .getSource()}\`. Please see the raw.macro documentation`
      );
    }
  });
}

function requireRaw({ referencePath, state, babel }) {
  const t = babel.types;
  const fileContent = JSON.stringify(getDocs());
  referencePath.parentPath.replaceWith(
    t.expressionStatement(t.stringLiteral(fileContent))
  );
}

module.exports = create;
