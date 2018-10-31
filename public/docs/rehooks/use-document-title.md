# name

useDocumentTitle

# reference

https://github.com/rehooks/device-orientation

# hook

```
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title])
}
```

# usage

```
function Demo() {
  useDocumentTitle('Page Title');
  return <div/>;
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
