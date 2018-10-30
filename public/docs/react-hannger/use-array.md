# name

useArray

# reference

https://github.com/kitze/react-hanger

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
