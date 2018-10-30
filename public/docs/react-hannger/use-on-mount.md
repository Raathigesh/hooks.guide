# name

useOnMount

# reference

https://github.com/kitze/react-hanger

# hook

```
const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount();
  }, []);
```

# usage

```
function Demo() {
    useOnMount(() => console.log("hello world"));;
    return <div></div>;
}
```
