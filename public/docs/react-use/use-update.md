# name

useUpdate

# reference

https://github.com/streamich/react-use/blob/master/docs/useTimeout.md

# description

Returns true after a specified number of milliseconds.

# hook

```
const useUpdate = () => useState(0)[1];
```

# usage

```
function Demo() {
  const update = useUpdate();
  return (
    <>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>Update</button>
    </>
  );
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
