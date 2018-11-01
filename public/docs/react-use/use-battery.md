# name

useBattery

# reference

https://github.com/streamich/react-use/blob/master/docs/useBattery.md

# description

React sensor hook that tracks battery status.

# hook

```
// utils
const on = (obj,...args) => obj.addEventListener(...args);
const off = (obj, ...args)  => obj.removeEventListener(...args);


const useBattery = () => {
  const [state, setState] = useState({});
  let mounted = true;
  let battery = null;

  const onChange = () => {
    const {charging, level, chargingTime, dischargingTime} = battery;
    setState({
      charging,
      level,
      chargingTime,
      dischargingTime
    });
  };

  const onBattery = () => {
    onChange();
    on(battery, 'chargingchange', onChange);
    on(battery, 'levelchange', onChange);
    on(battery, 'chargingtimechange', onChange);
    on(battery, 'dischargingtimechange', onChange);
  };

  useEffect(() => {
    navigator.getBattery().then((bat) => {
      if (mounted) {
        battery = bat;
        onBattery();
      }
    });

    return () => {
      mounted = false;
      if (battery) {
        off(battery, 'chargingchange', onChange);
        off(battery, 'levelchange', onChange);
        off(battery, 'chargingtimechange', onChange);
        off(battery, 'dischargingtimechange', onChange);
      }
    };
  }, [0]);

  return state;
};
```

# usage

```
function Demo() {
  const state = useBattery();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
