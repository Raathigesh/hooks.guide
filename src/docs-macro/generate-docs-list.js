const dir = require("node-dir");
const { join, sep } = require("path");
const docsDirectory = join(__dirname, "../../public/docs");

function getDocs() {
  const docs = {};
  var filePaths = dir.files(docsDirectory, { sync: true });
  filePaths.filter(path => !path.includes("template.md")).forEach(filePath => {
    const pathTokens = filePath.split(sep);
    const fileName = pathTokens.pop();
    const folderName = pathTokens.pop();

    if (!docs[folderName]) {
      docs[folderName] = [];
    }

    docs[folderName].push({
      name: camelize(fileName.replace(".md", "").replace(/-/g, " ")),
      path: folderName + "/" + fileName
    });
  });

  return docs;
}

// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

module.exports = getDocs;
