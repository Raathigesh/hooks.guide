# name

useOnUnmount

# reference

https://github.com/kitze/react-hanger

# hook

```
const useLifecycleHooks = ({ onMount, onUnmount }) => () =>
  useEffect(() => {
    onMount && onMount();
    return () => onUnmount && onUnmount();
  }, []);

const useLogger = (name, props) => {
  useLifecycleHooks({
    onMount: () => console.log(`${name} has mounted`),
    onUnmount: () => console.log(`${name} has unmounted`)
  });
  useEffect(() => {
    console.log("Props updated", props);
  });
};
```

# usage

```
function Example(props) {
  useLogger('Example', props);

  return null;
}

function Demo() {
    return <Example name={"John"}></Example>;
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
