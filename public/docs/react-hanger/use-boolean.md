# name

useBoolean

# reference

https://github.com/kitze/react-hanger

# description

Methods:

- toggle
- setTrue
- setFalse

# hook

```
const useBoolean = initial => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    toggle: useCallback(() => setValue(v => !v), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), [])
  };
};
```

# usage

```
function Demo() {
    const toggle = useBoolean(false);
    return toggle.value ? 'On' : 'Off';
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
