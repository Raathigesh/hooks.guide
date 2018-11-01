# name

useWindowScrollPosition

# reference

https://github.com/palmerhq/the-platform/

# description

Returns object containing:

- x: number: Horizontal scroll in pixels (window.pageXOffset).
- y: number: Vertical scroll in pixels (window.pageYOffset).

# hook

```
// We need to import lodash throttle if we want to throttle our scroll events
// import throttle from 'lodash.throttle';

const useWindowScrollPosition = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [scroll, setScroll] = React.useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  const handle = throttle(() => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  }, throttleMs);

  React.useEffect(() => {
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  return scroll;
};
```

# usage

```
function Demo() {
  const { x, y } = useWindowScrollPosition();

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <pre>{JSON.stringify({ x, y })}</pre>
    </div>
  )
}
```

# contributors

Vivek Nayyar
https://avatars0.githubusercontent.com/u/4931048?s=460&v=4
https://twitter.com/VivekNayyar09
