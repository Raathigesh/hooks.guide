# name

useWindowSize

# reference

https://github.com/rehooks/window-size

# hook

```
function useInputValue(initialValue) {
  let [value, setValue] = useState(initialValue);

  function onChange(event) {
    setValue(event.currentTarget.value);
  }

  return {
    value,
    onChange,
  };
}
```

# usage

```
function Demo() {
  let name = useInputValue('Jamie');
  // name = { value: 'Jamie', onChange: [Function] }
  return <input {...name}/>;
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
