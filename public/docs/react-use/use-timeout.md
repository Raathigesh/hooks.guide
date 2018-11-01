# name

useTimeout

# reference

https://github.com/streamich/react-use/blob/master/docs/useTimeout.md

# description

Returns true after a specified number of milliseconds.

# hook

```
const useTimeout = (ms = 0) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, ms);

    return () => {
      clearTimeout(timer);
    };
  }, [ms]);

  return ready;
};
```

# usage

```
function Demo() {
   const ready = useTimeout(2000);

  return <div>Ready: {ready ? 'Yes' : 'No'}</div>;
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
