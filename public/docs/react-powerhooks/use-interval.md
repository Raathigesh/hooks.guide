# name

useInterval

# reference

https://github.com/kalcifer/react-powerhooks

# description

This hook starts an interval timer that can be stopped/resumed any time. It takes in startImmediate which decides whether the interval is on by default. It also takes a time which is the interval duration.

It provides a start and stop method which allow us to control the state of the interval.

# hook

```
function useInterval({ startImmediate, duration, callback }) {
  const [count, updateCount] = useState(0);
  const [intervalState, setIntervalState] = useState(
    startImmediate === undefined ? true : startImmediate
  );
  const [intervalId, setIntervalId] = useState(null);

  useEffect(
    () => {
      if (intervalState) {
        const intervalId = setInterval(() => {
          updateCount(count + 1);
          callback && callback();
        }, duration);
        setIntervalId(intervalId);
      }

      return () => {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      };
    },
    [intervalState, count]
  );
  return {
    intervalId,
    start: () => {
      setIntervalState(true);
    },
    stop: () => {
      setIntervalState(false);
    }
  };
};
```

# usage

```
function Demo() {
  const [time, setTime] = useState(null);
  const { start, stop } = useInterval({
  duration: 1000,
  startImmediate: false,
  callback: () => {
    setTime(new Date().toLocaleTimeString());
  }
});

return (
  <>
    <div>The time is now {time}</div>
    <button onClick={() => stop()}>Stop interval</button>
    <button onClick={() => start()}>Start interval</button>
  </>
);
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
