import * as Babel from "@babel/standalone";

const ErrorHandler = `
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <span>Something went wrong.</span>;
    }
    return this.props.children;
  }
}
`;

export function execute(code, scope) {
  const appened = `
  ${ErrorHandler}
  ${code}

  ReactDOM.render(<ErrorBoundary><Demo /></ErrorBoundary>, document.getElementById('preview-root'))
  `;
  setTimeout(() => {
    const ReactDOM = scope.ReactDOM;
    const useState = scope.useState;
    const useCallback = scope.useCallback;
    const useEffect = scope.useEffect;
    const useReducer = scope.useReducer;
    const useRef = scope.useRef;
    const useLayoutEffect = scope.useLayoutEffect;
    console.log = (...args) => {
      const consoleDiv = document.getElementById("preview-console");
      const newLog = document.createElement("div");
      newLog.innerHTML = JSON.stringify(args);
      consoleDiv.appendChild(newLog);
    };
    try {
      const tranformedCode = Babel.transform(appened, {
        presets: ["es2015", "react"]
      }).code;
      eval(tranformedCode);
    } catch (e) {
      console.log(e);
    }
  }, 0);
}
