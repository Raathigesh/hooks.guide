# name

useArray

# reference

https://github.com/kitze/react-hanger

# description

Methods:

- add
- clear
- removeIndex
- removeById

# hook

```
const useArray = initial => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    add: useCallback(a => setValue(v => [...v, a]), []),
    clear: useCallback(() => setValue(() => []), []),
    removeById: useCallback(
      id => setValue(arr => arr.filter(v => v && v.id !== id)),
      []
    ),
    removeIndex: useCallback(
      index =>
        setValue(v => {
          v.splice(index, 1);
          return v;
        }),
      []
    )
  };
};
```

# usage

```
function Demo() {
    const todos = useArray(['Item 1']);
    return todos.value.map(todo => <div>{todo}</div>)
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
