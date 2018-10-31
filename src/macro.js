const path = require("path");
const fs = require("fs");
const { createMacro } = require("babel-plugin-macros");
const getDocs = require("./generate-docs-list");

const create = createMacro(rawMacros);
module.exports = create;

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
  const filename = state.file.opts.filename;
  const t = babel.types;
  const callExpressionPath = referencePath.parentPath;
  const dirname = path.dirname(filename);
  let rawPath;

  try {
    rawPath = callExpressionPath.get("arguments")[0].evaluate().value;
  } catch (err) {
    // swallow error, print better error below
  }

  // const fullPath = path.resolve(dirname, rawPath);
  const fileContent = JSON.stringify(getDocs());

  referencePath.parentPath.replaceWith(
    t.expressionStatement(t.stringLiteral(fileContent))
  );
}
