# name

useContextReducer

# reference

https://github.com/diegohaz/constate

# description

This hook lets you use a [useReducer](/built-in/useReducer)-like hook for global state.

# hook

```
const Context = React.createContext([{}, () => {}]);

const Provider = ({ children }) => {
  const state = React.useState({});
  const value = React.useMemo(() => state, [state[0]]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

function useContextReducer(contextKey, reducer, initialState, initialAction) {
  const [contextState, setContextState] = React.useContext(Context);
  let [state] = React.useReducer(reducer, initialState, initialAction);

  if (contextState[contextKey] != null) {
    state = contextState[contextKey];
  }

  const dispatch = action =>
    setContextState(prevState => Object.assign({}, prevState, {
      [contextKey]: reducer(prevState[contextKey], action)
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

  return [state, dispatch];
}
```

# usage

```
function reducer(state, action) {
  switch(action.type) {
    case "INCREMENT": return state + 1;
    default: return state;
  }
}

function useCounter() {
  const [count, dispatch] = useContextReducer("counter", reducer, 0);
  const increment = () => dispatch({ type: "INCREMENT" });
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
