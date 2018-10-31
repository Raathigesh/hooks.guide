import macro from "./docs-macro/macro";

const docsString = macro();
const docsObj = JSON.parse(docsString);

export default docsObj;
