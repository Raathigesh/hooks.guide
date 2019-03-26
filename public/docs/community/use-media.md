# name

useMedia

# reference

https://github.com/ryanflorence/react-conf-2018/tree/master/media

# description

A hook inspired by an example showed at React Conf 2018 by Ryan Florence https://github.com/ryanflorence

# hook

```javascript
function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
```

# usage

```javascript
function Demo() {
  const match = useMedia("(max-width: 900px) ");

  return <div>"(max-width: 900px)": {match ? "Yes" : "No"}</div>;
}
```

# contributors

Eduardo Sotero
https://avatars3.githubusercontent.com/u/7073199?s=460&v=4
https://github.com/dudusotero
