# name

useActive

# reference

https://github.com/kalcifer/react-powerhooks

# description

This hook lets you know when your mouse pointer is active on a particular element. It needs a ref of the element in question to work with. It can also take an onChange callback which it calls everytime the active state changes. The onChange function recieves the current active state of the element as a boolean value.

# hook

```
function useActive({ onChange, refEl }) {
  const [value, setValue] = useState(false);
  const handleMouseDown = () => {
    setValue(true);
    onChange(true);
  };
  const handleMouseUp = () => {
    setValue(false);
    onChange(false);
  };
  useEffect(() => {
    if (refEl && refEl.current) {
      refEl.current.addEventListener("mousedown", handleMouseDown);
      refEl.current.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (refEl && refEl.current) {
        refEl.current.removeEventListener("mousedown", handleMouseDown);
        refEl.current.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);

  return value;
};
```

# usage

```
function Demo() {
  const inputEl = useRef(null);
  const activeValue = useActive({ refEl: inputEl });

  return (
    <>
      <input ref={inputEl} type="text" />
      <div>{activeValue ? 'Active': 'Nop'}</div>
    </>
  );
}
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
