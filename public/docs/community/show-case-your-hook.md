# UseTimer

Contribute your hook

# reference

https://github.com/Raathigesh/hooks.guide

# hook

```
const useTimer = (initTime = 0) => {
  const [time, setTime] = useState(initTime);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isRunning, time]);

  return { time, startTimer, stopTimer, resetTimer };
};
```

# usage

```
function Demo() {
  const { time, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <div>{time}</div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};
```
