import macro from "./macro";

const docsString = macro();
const docsObj = JSON.parse(docsString);

export default docsObj;
