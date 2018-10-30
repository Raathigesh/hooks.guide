var dir = require("node-dir");
var fs = require("fs");
const { join, sep, basename } = require("path");

const docs = {};

dir.subdirs(join(__dirname, "/public/docs"), function(err, subdirs) {
  if (err) throw err;
  subdirs.forEach(directoryPath => {
    const docDirectoryName = directoryPath.split(sep).pop();
    docs[docDirectoryName] = [];

    dir.files(directoryPath, function(err, files) {
      if (err) throw err;

      files.forEach(filePath => {
        const mdFilePath = docDirectoryName + "/" + basename(filePath);
        docs[docDirectoryName].push({
          name: camelize(
            basename(filePath)
              .replace(".md", "")
              .replace(/-/g, " ")
          ),
          path: mdFilePath
        });
      });

      fs.writeFile(
        join(__dirname, "/src/docs.json"),
        JSON.stringify(docs),
        function(err) {
          if (err) {
            return console.log(err);
          }

          console.log("The file was saved!");
        }
      );
      console.log(docs);
    });
  });
});

// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
