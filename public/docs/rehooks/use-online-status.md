# name

useOnlineStatus

# reference

https://github.com/rehooks/online-status

# hook

```
function getOnlineStatus() {
  return typeof navigator !== "undefined" &&
    typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;
}

function useOnlineStatus() {
  let [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());
  function goOnline() {
    setOnlineStatus(true);
  }
  function goOffline() {
    setOnlineStatus(false);
  }
  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return onlineStatus;
}
```

# usage

```
function Demo() {
  let onlineStatus = useOnlineStatus();
  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}
```
