# name

useNetworkStatus

# reference

https://github.com/rehooks/network-status

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

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
