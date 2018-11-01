# name

useMount

# reference

https://github.com/streamich/react-use/blob/master/docs/useMount.md

# description

React lifecycle hook that call mount callback, when component is mounted.

# hook

```
const useMount = (mount) => useEffect(mount, []);
```

# usage

```
function Demo() {
  useMount(() => console.log('MOUNTED'));
  return null;
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
