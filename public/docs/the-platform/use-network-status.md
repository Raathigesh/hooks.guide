# name

useNetworkStatus

# reference

https://github.com/palmerhq/the-platform/

# description

Retrieve network status from the browser.

# hook

```
const useNetworkStatus = () => {
  const [status, setStatus] = React.useState(navigator.onLine);
  const [offlineAt, setOfflineAt] = React.useState();

  React.useEffect(() => {
    const handleOnline = () => {
      setStatus(true);
      setOfflineAt(undefined);
    };

    const handleOffline = () => {
      setStatus(false);
      setOfflineAt(new Date());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isOnline: status,
    offlineAt,
  };
};
```

# usage

```
function Demo() {
  const { isOnline, offlineAt } = useNetworkStatus();
  return (
    <div>
      <p>You are {isOnline ? "Online" : "Offline"}</p>
      {offlineAt? <p>You were offline at {JSON.stringify(offlineAt)}</p>:<p>To go offline, check your network tab in chrome console and check the offline checkbox</p>}
    </div>
  );
}
```

# contributors

Vivek Nayyar
https://avatars0.githubusercontent.com/u/4931048?s=460&v=4
https://twitter.com/VivekNayyar09
