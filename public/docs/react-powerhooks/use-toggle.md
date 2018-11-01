# name

useToggle

# reference

https://github.com/kalcifer/react-powerhooks

# description

This is a hook that lets you toggle between boolean values. It needs an initialValue to work with.

# hook

```
const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(value => !value));
  return [value, toggler];
};
```

# usage

```
function Demo() {
  const [currentValue, toggleAway] = useToggle(true);
  return (
    <div onClick={toggleAway}>
      {currentValue ? '🍎' : '🍏'}
    </div>
  );
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
