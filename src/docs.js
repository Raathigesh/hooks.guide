import macro from "./docs-macro/macro";

const docsString = macro();
const docsObj = JSON.parse(docsString);

export default docsObj;

// THIS IS THE FILE YOU HAVE TO CHANGE AFTER ADING A MARKDOWN FILE. JUST CHANGE THE COMMENT OR DO SOMETHING SO WEBPACK CAN BUILD AGAIN
