# name

useUnmount

# reference

https://github.com/streamich/react-use/blob/master/docs/useUnmount.md

# description

React lifecycle hook that call unmount callback, when component is un-mounted.

# hook

```
const useUnmount = (unmount) => {
  useEffect(() => () => {
    if (unmount) unmount();
  }, []);
};
```

# usage

```
function Demo() {
  useUnmount(() => console.log('UNMOUNTED'));
  return null;
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
