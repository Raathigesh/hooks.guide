# name

useTitle

# reference

https://github.com/streamich/react-use/blob/master/docs/useTitle.md

# description

React side-effect hook that sets title of the page.

# hook

```
const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
```

# usage

```
function Demo() {
  useTitle('Hello world!');

  return null;
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
