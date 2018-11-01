# name

useLogger

# reference

https://github.com/streamich/react-use/blob/master/docs/useLogger.md

# description

React lifecycle hook that logs in console as component transitions through life-cycles.

- `name` &mdash; component name.
- `props` &mdash; latest props.

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

const useLogger = (name, props) => {
  useLifecycles(() => console.log(`${name} mounted`), () => console.log(`${name} un-mounted`));
  useEffect(() => {
    console.log(`${name} props updated`, props);
  });
};
```

# usage

```
function Demo(props) {
  useLogger('Demo', props);
  return null;
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
