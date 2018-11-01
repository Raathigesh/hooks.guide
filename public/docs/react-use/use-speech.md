# name

useHover

# reference

https://github.com/streamich/react-use/blob/master/docs/useSpeech.md

# description

React UI hook that synthesizes human voice that speaks a given string.

# hook

```
const useSetState =(initialState = {})=> {
  const [state, set] = useState(initialState);
  const setState = (patch) => {
    Object.assign(state, patch);
    set(state);
  };

  return [state, setState];
};

const useSpeech = (text, opts = {}) => {
  const [state, setState] = useSetState({
    isPlaying: false,
    volume: opts.volume || 1,
  });

  const uterranceRef = useRef(null);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = opts.volume || 1;
    utterance.onstart = () => setState({isPlaying: true});
    utterance.onresume = () => setState({isPlaying: true});
    utterance.onend = () => setState({isPlaying: false});
    utterance.onpause = () => setState({isPlaying: false});
    uterranceRef.current = utterance;
    window.speechSynthesis.speak(uterranceRef.current);
  }, []);

  return state;
};
```

# usage

```
function Demo() {
  const state = useSpeech('Hello world!');

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};
```

# contributors

Raathigeshan
https://avatars1.githubusercontent.com/u/3108160?s=400&u=bdf5001958c7e65c1314944d5e7fe84699b23164&v=4
https://twitter.com/Raathigesh
