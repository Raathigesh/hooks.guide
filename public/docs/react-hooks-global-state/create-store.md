# name

createStore

# reference

https://github.com/dai-shi/react-hooks-global-state

# description

Simple global state by Hooks API.
The global state consists of one or more state items.
Each state item corrensponds to `useState`.
This one is similar to Redux, but of course not the same.

# hook

```
const createStore = (reducer, initialState, enhancer) => {
  if (enhancer) return enhancer(createStore)(reducer, initialState);
  const stateItemMap = map(initialState, createStateItem);
  const getState = createGetState(stateItemMap, initialState);
  const dispatch = createDispatch(stateItemMap, getState, reducer);
  return {
    useGlobalState: name => stateItemMap[name].hook(),
    getState,
    dispatch,
  };
};

const createStateItem = (initialValue) => {
  let value = initialValue;
  const getValue = () => value;
  const listeners = [];
  const updater = (funcOrVal) => {
    if (isFunction(funcOrVal)) {
      value = funcOrVal(value);
    } else {
      value = funcOrVal;
    }
    listeners.forEach(f => f(value));
  };
  const hook = () => {
    const [val, setVal] = useState(value);
    useEffect(() => {
      listeners.push(setVal);
      const cleanup = () => {
        const index = listeners.indexOf(setVal);
        listeners.splice(index, 1);
      };
      return cleanup;
    }, []);
    return [val, updater];
  };
  return { getValue, updater, hook };
};

const createGetState = (stateItemMap, initialState) => {
  const keys = Object.keys(stateItemMap);
  let globalState = initialState;
  const getState = () => {
    let changed = false;
    const currentState = {};
    // XXX an extra overhead here
    keys.forEach((key) => {
      currentState[key] = stateItemMap[key].getValue();
      if (currentState[key] !== globalState[key]) changed = true;
    });
    if (changed) globalState = currentState;
    return globalState;
  };
  return getState;
};

const createDispatch = (stateItemMap, getState, reducer) => {
  const keys = Object.keys(stateItemMap);
  const dispatch = (action) => {
    const oldState = getState();
    const newState = reducer(oldState, action);
    if (oldState !== newState) {
      keys.forEach((key) => {
        if (oldState[key] !== newState[key]) {
          stateItemMap[key].updater(newState[key]);
        }
      });
    }
    return action;
  };
  return dispatch;
};

const map = (obj, func) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => { newObj[key] = func(obj[key]); });
  return newObj;
};
const isFunction = fn => (typeof fn === 'function');
```

# usage

```
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return Object.assign({}, state, { counter: state.counter + 1 });
    case 'decrement': return Object.assign({}, state, { counter: state.counter - 1 });
    default: return state;
  }
};
const initialState = { counter: 0 }; // initialState is not optional.
const { dispatch, useGlobalState } = createStore(reducer, initialState);

const Counter = () => {
  const [value] = useGlobalState('counter');
  return (
    <div>
      <span>Counter: {value}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
};

const Demo = () => (
  <div>
    <Counter />
    <Counter />
  </div>
);
```

# contributors

Daishi Kato
https://github.com/dai-shi.png
https://github.com/dai-shi
