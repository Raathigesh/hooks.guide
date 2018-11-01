# name

useLifecycles

# reference

https://github.com/streamich/react-use/blob/master/docs/useLifecycles.md

# description

React lifecycle hook that call mount and unmount callbacks, when component is mounted and un-mounted, respectively.

# hook

```
const useLifecycles = (mount, unmount) => {
  useEffect(() => {
    if (mount) mount();
    return () => {
      if (unmount) unmount();
    };
  }, []);
};
```

# usage

```
function Demo() {
  useLifecycles(() => console.log('MOUNTED'), () => console.log('UNMOUNTED'));
  return null;
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
