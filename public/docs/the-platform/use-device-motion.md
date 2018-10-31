# name

useDeviceMotion

# reference

https://github.com/palmerhq/the-platform/

# hook

```
const useDeviceMotion = () => {
  const [motion, setMotion] = React.useState({
    acceleration: {
      x: null,
      y: null,
      z: null,
    },
    accelerationIncludingGravity: {
      x: null,
      y: null,
      z: null,
    },
    rotationRate: {
      alpha: null,
      beta: null,
      gamma: null,
    },
    interval: 0,
  });

  React.useEffect(() => {
    const handle = deviceMotionEvent => {
      setMotion(deviceMotionEvent);
    };

    window.addEventListener('devicemotion', handle);

    return () => {
      window.removeEventListener('devicemotion', handle);
    };
  }, []);

  return motion;
};
```

# usage

```
function Demo() {
  const { acceleration, rotationRate, interval } = useDeviceMotion();
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <pre>{JSON.stringify({ acceleration, rotationRate, interval })}</pre>
    </div>
  )
}
```

# contributors

Vivek Nayyar
https://avatars0.githubusercontent.com/u/4931048?s=460&v=4
https://twitter.com/VivekNayyar09
