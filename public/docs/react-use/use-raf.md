# name

useRaf

# reference

https://github.com/streamich/react-use/blob/master/docs/useRaf.md

# description

React animation hook that forces component to re-render on each reaquestAnimationFrame, returns percentage of time elapsed.

# hook

```
const useRaf = (ms = 1e12, delay = 0) => {
  const [elapsed, set] = useState(0);

  useEffect(() => {
    let raf, timerStop, start;

    const onFrame = () => {
      const time = Math.min(1, (Date.now() - start) / ms);
      set(time);
      loop();
    };
    const loop = () => {
      raf = requestAnimationFrame(onFrame);
    };
    const onStart = () => {
      timerStop = setTimeout(() => {
        cancelAnimationFrame(raf);
        set(1);
      }, ms);
      start = Date.now();
      loop();
    };
    const timerDelay = setTimeout(onStart, delay);

    return () => {
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      cancelAnimationFrame(raf);
    };
  }, [ms, delay]);

  return elapsed;
};
```

# usage

```
function Demo() {
   const elapsed = useRaf(5000, 1000);

  return (
    <div>
      Elapsed: {elapsed}
    </div>
  );
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
