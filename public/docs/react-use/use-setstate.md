# name

useSetState

# reference

https://github.com/streamich/react-use/blob/master/docs/useSetState.md

# description

React state hook that creates setState method which works similar to how this.setState works in class components—it merges object changes into current state.

# hook

```
const useSetState =(initialState = {})=> {
  const [state, set] = useState(initialState);
  const setState = (patch) => {
    Object.assign(state, patch);
    set(state);
  };

  return [state, setState];
};
```

# usage

```
function Demo() {
   const [state, setState] = useSetState({});

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({hello: 'world'})}>hello</button>
      <button onClick={() => setState({foo: 'bar'})}>foo</button>
    </div>
  );
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
