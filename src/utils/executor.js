// import * as Babel from "@babel/standalone";
const buble = require("buble");

const ErrorHandler = `
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong.</span>;
    }
    return this.props.children;
  }
}
`;

export function execute(code, scope) {
  const fullCodeString = `
  ${ErrorHandler}
  ${code}

  ReactDOM.render(<ErrorBoundary><Demo /></ErrorBoundary>, document.getElementById('preview-root'))
  `;
  setTimeout(() => {
    const consoleContainer = document.getElementById("console-container");
    if (consoleContainer) {
      consoleContainer.innerHTML = "";
    }

    const ReactDOM = scope.ReactDOM;
    const useState = scope.useState;
    const useCallback = scope.useCallback;
    const useEffect = scope.useEffect;
    const useReducer = scope.useReducer;
    const useRef = scope.useRef;
    const useLayoutEffect = scope.useLayoutEffect;
    const throttle = scope.throttle;
    console.log = (...args) => {
      console.warn(...args);
      if (args) {
        const consoleEntry = document.createElement("div");
        consoleEntry.innerHTML = JSON.stringify(args);

        if (consoleContainer) {
          consoleContainer.appendChild(consoleEntry);
        }
      }
    };
    try {
      /* const transformedCode = Babel.transform(fullCodeString, {
        presets: ["es2015", "react"]
      }).code; */
      const transformedCode = buble.transform(fullCodeString).code;
      eval(transformedCode);
    } catch (e) {
      console.log(e);
    }
  }, 10);
}
