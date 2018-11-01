# name

useFavicon

# reference

https://github.com/streamich/react-use/blob/master/docs/useFavicon.md

# description

React side-effect hook sets the favicon of the page.

# hook

```
const useFavicon = (href) => {
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [href]);
};
```

# usage

```
// Returns a Promise that resolves after one second.
const fn = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('RESOLVED');
  }, 1000);
});

function Demo() {
  useFavicon('https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico');

  return null;
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
