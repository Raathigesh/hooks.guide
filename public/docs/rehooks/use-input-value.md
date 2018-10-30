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
