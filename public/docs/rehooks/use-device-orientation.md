# name

useDeviceOrientation

# reference

https://github.com/rehooks/device-orientation

# hook

```
function useDeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState({ absolute: false, alpha: null, beta: null, gamma: null });

  function handleDeviceOrientation(event) {
    setDeviceOrientation({
      absolute: event.absolute,
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma
    })
  }

  useEffect(() => {
    window.addEventListener('deviceorientation', handleDeviceOrientation, true);

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [])

  return deviceOrientation;
}
```

# usage

```
function Demo() {
  let value = useDeviceOrientation();
  return (
    <div>
      <p>Absolute: {value.absolute}</p>
      <p>Alpha: {value.alpha}</p>
      <p>Beta: {value.beta}</p>
      <p>Gamma: {value.gamma}</p>
    </div>
  );
}
```
