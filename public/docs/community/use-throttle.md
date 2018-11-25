# name

useThrottle

# reference

https://github.com/bhaskarGyan/use-throttle

# description

A Throttle hook for react according to https://twitter.com/dan_abramov/status/1060729512227467264


# hook

```
const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(
    () => {
      const handler = setTimeout(function() {
        if (Date.now() - lastRan.current >= limit) {
          setThrottledValue(value);
          lastRan.current = Date.now();
        }
      }, limit - (Date.now() - lastRan.current));

      return () => {
        clearTimeout(handler);
      };
    },
    [value, limit]
  );

  return throttledValue;
};
```

# usage

```
function Demo(){
  const [text, setText] = useState("Hello");
  const throttledText = useThrottle(text, 1000);
  return (
    <div>
      <input
        defaultValue={"Hello"}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Throttled value: {throttledText}</p>
    </div>
  );
}
```

# contributors

Bhaskar Gyan Vardhan
https://avatars1.githubusercontent.com/u/10504808?s=40&v=4
https://github.com/bhaskarGyan
