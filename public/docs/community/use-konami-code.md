# name

useKonamiCode

# reference

https://stackblitz.com/edit/use-konami-code

# description

A hook (easter egg) inspired by the famous Konami Code

# hook

```javascript
function useKonamiCode(cb = () => {}) {
  const [sequence, setSequence] = useState([]);

  const konamiCodeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  const keyPress = e => setSequence(prev => [...prev, e.keyCode]);

  useEffect(() => {
    sequence.forEach((code, index) => {
      if (code !== konamiCodeSequence[index]) {
        setSequence([]);
      }
    });

    if (sequence.toString() == konamiCodeSequence.toString()) {
      cb();
      setSequence([]);
    }
  }, [sequence]);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [cb]);

  return sequence;
}
```

# usage

```javascript
/*
  Type in your keyboard the following sequence:
  ↑ ↑ ↓ ↓ ← → ← → B A
*/

function Demo() {
  const sequence = useKonamiCode(() => console.log("🐰🥚"));

  return (
    <>
      <div>↑ ↑ ↓ ↓ ← → ← → B A</div>
      <div>{JSON.stringify(sequence)}</div>
    </>
  );
}
```

# contributors

Eduardo Sotero
https://avatars3.githubusercontent.com/u/7073199?s=460&v=4
https://github.com/dudusotero
