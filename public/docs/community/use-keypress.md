# name

useKeyPress

# reference

https://codesandbox.io/s/5v71vl72kk

# description

A simple hook to detect when the user is pressing a specific key on their keyboard.

# hook

```
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
```

# usage

```js
// Your usage code here. You can use the code you documented above.
// Always name the component that you want to mount as `Demo`. Refer other docs for sample.
// Don't use `export` or `import`. We just `eval` this code.

function Demo() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress("h");
  const sadPress = useKeyPress("s");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");

  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
```

# contributors

Steven Gong
https://github.com/gonghaima
