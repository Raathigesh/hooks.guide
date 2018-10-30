# name

useBoolean

# reference

https://github.com/kitze/react-hanger

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
