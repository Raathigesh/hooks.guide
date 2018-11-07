# name

createGlobalState

# reference

https://github.com/dai-shi/react-hooks-global-state

# description

Simple global state by Hooks API.
The global state consists of one or more state items.
Each state item corrensponds to `useState`.

# hook

```
const createGlobalState = (initialState) => {
  const stateItemMap = map(initialState, createStateItem);
  return {
    useGlobalState: name => stateItemMap[name].hook(),
    setGlobalState: (name, update) => stateItemMap[name].updater(update),
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

const map = (obj, func) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => { newObj[key] = func(obj[key]); });
  return newObj;
};
const isFunction = fn => (typeof fn === 'function');
```

# usage

```
const initialState = { counter: 0 };
const { useGlobalState } = createGlobalState(initialState);

const Counter = () => {
  const [value, update] = useGlobalState('counter');
  return (
    <div>
      <span>Counter: {value}</span>
      <button onClick={() => update(v => v + 1)}>+1</button>
      <button onClick={() => update(v => v - 1)}>-1</button>
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
