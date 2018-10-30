# name

useWindowMousePosition

# reference

https://github.com/rehooks/window-mouse-position

# hook

```
function useWindowMousePosition() {
  let [WindowMousePosition, setWindowMousePosition] = useState({
    x: null,
    y: null
  });

  function handleMouseMove(e) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return WindowMousePosition;
}
```

# usage

```
function Demo() {
  let { x, y } = useWindowMousePosition();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <pre>{JSON.stringify({ x, y })}</pre>
    </div>
  );
}
```
