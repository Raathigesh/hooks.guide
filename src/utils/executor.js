import * as Babel from "@babel/standalone";

const ErrorHandler = `
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong.</span>;
    }
    return this.props.children;
  }
}
`;

export function execute(code, scope, log) {
  const fullCodeString = `
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
    const throttle = scope.throttle;
    console.log = (...args) => {
      if (args) {
        log(JSON.stringify(args));
      }
    };
    try {
      const transformedCode = Babel.transform(fullCodeString, {
        presets: ["es2015", "react"]
      }).code;
      eval(transformedCode);
    } catch (e) {
      console.log(e);
    }
  }, 0);
}
