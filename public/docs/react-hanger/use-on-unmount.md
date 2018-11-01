# name

useOnUnmount

# reference

https://github.com/kitze/react-hanger

# hook

```
const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);
```

# usage

```
function Demo() {
    useOnUnmount(() => console.log("goodbye world"));
    return <div></div>;
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
