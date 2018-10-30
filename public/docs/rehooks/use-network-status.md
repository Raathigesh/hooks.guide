# name

useDeviceOrientation

# reference

https://github.com/rehooks/device-orientation

# hook

```
function getConnection() {
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection;
}


function useNetworkStatus() {
  let [connection, updateNetworkConnection] = useState(getConnection());

  function updateConnectionStatus() {
    updateNetworkConnection(getConnection());
  }
  useEffect(() => {
    connection.addEventListener("change", updateConnectionStatus);
    return () => {
      connection.removeEventListener("change", updateConnectionStatus);
    };
  }, []);

  return connection;
}
```

# usage

```
function Demo() {
  let connection = useNetworkStatus();
  return (
    <div>
      <div>downlink: {connection.downlink}</div>
      <div>effectiveType: {connection.effectiveType}</div>
      <div>rtt: {connection.rtt}</div>
      <div>saveData: {connection.saveData ? "yes" : "no"}</div>
    </div>
  );
}
```
