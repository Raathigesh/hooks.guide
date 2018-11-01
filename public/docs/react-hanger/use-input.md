# name

useInput

# reference

https://github.com/kitze/react-hanger

# description

Methods:

- clear
- onChangeHandler
- bindToInput - binds the value and onChange props to an input that has e.target.value
- bind - binds the value and onChange props to an input that's using only e in onChange (like most external components)

Properties:

- hasValue

# hook

```
const useInput = initial => {
  const isNumber = typeof initial === "number";
  const [value, setValue] = useState(initial);
  const onChange = useCallback(e => setValue(e.target.value), []);

  return {
    value,
    setValue,
    hasValue:
      value !== undefined &&
      value !== null &&
      (!isNumber ? value.trim && value.trim() !== "" : true),
    clear: useCallback(() => setValue(""), []),
    onChange,
    bindToInput: {
      onChange,
      value
    },
    bind: {
      onChange: setValue,
      value
    }
  };
};
```

# usage

```
function Demo() {
    const newTodo = useInput("");
    return <input type="text" value={newTodo.value} onChange={newTodo.onChange} />;
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
