# name

useSession

# reference

https://github.com/GabrielBB/react-use-session

# hook

```
function useSession(sessionKey, keepOnWindowClosed = true) {
    if (!sessionKey) {
        throw new Error("sessionKey was not provided to useSession hook. Example: useSession('facebook-session')");
    }

    const getStorage = () => {
        return keepOnWindowClosed ? localStorage : sessionStorage;
    };
    const getStorageValue = () => {
        try {
            const storageValue = getStorage().getItem(sessionKey);
            if (storageValue != null) {
                // There is a session in the storage already
                try {
                    const session = JSON.parse(storageValue);
                    return session;
                }
                catch (_a) {
                    // Oops... It seems it wasn't an object, returning as String then
                    return storageValue;
                }
            }
        }
        catch (_b) {
            // This catch block handles the known issues listed here: https://caniuse.com/#feat=namevalue-storage
            console.warn("useSession could not access the browser storage. Session will be lost when closing browser window");
        }
        return null;
    };
    const [state, setState] = useState(getStorageValue);
    const save = (sessionValue) => {
        if (typeof sessionValue == "object" || typeof sessionValue === "string") {
            getStorage().setItem(sessionKey, JSON.stringify(sessionValue));
            setState(sessionValue);
        }
        else {
            throw new Error("useSession hook only accepts objects or strings as session values");
        }
    };

    const saveJWT = (jwt) => {
        try {
          const base64Url = jwt.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          save(JSON.parse(window.atob(base64)));
        }
        catch (ex) {
            throw new Error("Could not parse provided Json Web Token: " + ex);
        }
    };

    const clear = () => {
        getStorage().removeItem(sessionKey);
        setState(null);
    };
    const syncState = (event) => {
        if (event.key === sessionKey) {
            setState(getStorageValue());
        }
    };
    useEffect(() => {
        window.addEventListener("storage", syncState);
        return () => {
            window.removeEventListener("storage", syncState);
        };
    }, [sessionKey]);
    return { session: state, save, saveJWT, clear };
}
```

# usage

```
function Demo() {

  const JSON_WEB_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyZWFjdC11c2Utc2Vzc2lvbi1leGFtcGxlIiwiaWF0IjoxNTQxMDgwMjAwLCJleHAiOjE5MTk3Njg0MDAsImF1ZCI6ImxvY2FsaG9zdDozMDAwIiwic3ViIjoiZ2FicmllbGJiMDMwNkBnbWFpbC5jb20iLCJHaXZlbk5hbWUiOiJHYWJyaWVsIiwiU3VybmFtZSI6IkJhc2lsaW8gQnJpdG8iLCJSb2xlIjoiQ3JlYXRvciJ9.GK23QsdEgMzGmxCwX9CjEg5lbSztZ7C67vKc7L09KgI";

  const { session, saveJWT, clear } = useSession('storage-key');

  return (
    <div>
      {
        session ?
          <div>
            <p>You are logged in as: <code>{session.GivenName}</code>. Your email is: <code>{session.sub}</code></p>
            <p>You can refresh this page and you are still logged in</p>
            <button onClick={clear}>Log out</button>
          </div>
          :
          <div>
            <p>No session. Please Log In</p>
            JSON Web Token: <input value={JSON_WEB_TOKEN} disabled type="text" />
            <button onClick={() => saveJWT(JSON_WEB_TOKEN)}>Log in with JSON Web Token</button>
          </div>
      }

    </div>)
}
```

# contributors

Gabriel Basilio Brito
https://avatars2.githubusercontent.com/u/8752823?s=400&u=96c0127a03f7ff062866f555b5f4028fb3a41cd4&v=4
https://github.com/GabrielBB
