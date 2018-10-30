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
