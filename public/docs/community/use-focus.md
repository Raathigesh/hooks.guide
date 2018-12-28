# name

useFocus

# reference

https://codesandbox.io/s/72o0nwp86q

# description

A simple hook for detecting focus state in components that wrap inputs.

# hook

```
const useFocus = (ref, defaultState = false) => {

  const [state, setState] = useState(defaultState);

  useEffect(() => {

    const onFocus = () => setState(true);
    const onBlur = () => setState(false);
    ref.current.addEventListener('focus', onFocus);
    ref.current.addEventListener('blur', onBlur);

    return () => {
      ref.current.removeEventListener('focus', onFocus);
      ref.current.removeEventListener('blur', onBlur);
    };

  }, []);

  return state;
};
```

# usage

```
// Your usage code here. You can use the code you documented above.
// Always name the component that you want to mount as `Demo`. Refer other docs for sample.
// Don't use `export` or `import`. We just `eval` this code.

function Demo() {

  const ref = useRef();
  const focused = useFocus(ref);

  return (
    <div className="form-field">
      <input type="text" ref={ref} placeholder="focus on me" />
      {focused && <span>Some input tip lorem ipsum dolor sit amet, consecteur elit sed do eiusmod tempor incididunt</span>
    </div>
  );
}

```

# contributors

nikrowell
https://avatars1.githubusercontent.com/u/260039?s=460&v=4
https://github.com/nikrowell
