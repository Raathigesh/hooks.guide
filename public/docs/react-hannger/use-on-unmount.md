# name

useOnUnmount

# reference

https://github.com/kitze/react-hanger

# hook

```
const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);
```

# usage

```
function Demo() {
    useOnUnmount(() => console.log("goodbye world"));
    return <div></div>;
}
```
