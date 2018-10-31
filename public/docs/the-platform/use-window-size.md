# name

useWindowSize

# reference

https://github.com/palmerhq/the-platform/

# hook

```
const events = new Set();
const onResize = () => events.forEach(fn => fn());

const useWindowSize = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handle = throttle(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, throttleMs);

  React.useEffect(() => {
    if (events.size === 0) {
      window.addEventListener('resize', onResize, true);
    }

    events.add(handle);

    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('resize', onResize, true);
      }
    };
  }, []);

  return size;
};
```

# usage

```
function Demo() {
  const size = useWindowSize();

  return (
    <div>
      <p>Width: {size.width}</p>
      <p>Height: {size.height}</p>
    </div>
  );
}
```
