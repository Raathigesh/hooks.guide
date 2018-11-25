# name

useContextState

# reference

https://github.com/diegohaz/constate

# description

This hook lets you use a [useState](/built-in/useState)-like hook for global state.

# hook

```
const Context = React.createContext([{}, () => {}]);

const Provider = ({ children }) => {
  const state = React.useState({});
  const value = React.useMemo(() => state, [state[0]]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

function useContextState(contextKey, initialState) {
  const [contextState, setContextState] = React.useContext(Context);

  const state = contextState[contextKey] != null
    ? contextState[contextKey]
    : initialState;

  const setState = nextState => 
    setContextState(prevState => Object.assign({}, prevState, {
      [contextKey]: typeof nextState === "function" 
        ? nextState(prevState) 
        : nextState
    }));

  React.useMutationEffect(() => {
    if (contextState[contextKey] == null && state != null) {
      setContextState(prevState => {
        if (prevState[contextKey] == null) {
          return Object.assign({}, prevState, {
            [contextKey]: state
          });
        }
        return prevState;
      });
    }
  }, [contextKey]);

  return [state, setState];
}
```

# usage

```
function useCounter() {
  const [count, setCount] = useContextState("counter", 0);
  const increment = () => setCount(count + 1);
  return { count, increment };
}

function IncrementButton() {
  const { increment } = useCounter();
  return <button onClick={increment}>Increment</button>;
}

function Count() {
  const { count } = useCounter();
  return <div>{count}</div>
}

function Demo() {
  return (
    <Provider>
      <Count />
      <IncrementButton />
    </Provider>
  );
}
```

# contributors

Haz
https://avatars2.githubusercontent.com/u/3068563
https://twitter.com/diegohaz
