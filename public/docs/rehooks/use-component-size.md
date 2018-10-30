# name

useComponentSize

# reference

https://github.com/rehooks/component-size

# hook

```
function getSize(el) {
  if (!el) {
    return {}
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

function useComponentSize(ref) {
  let [ComponentSize, setComponentSize] = useState(getSize(ref.current))

  function handleResize() {
    if (ref && ref.current) {
      setComponentSize(getSize(ref.current))
    }
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return ComponentSize
}
```

# usage

```
function Demo() {
  let ref = useRef(null)
  let size = useComponentSize(ref)
  // size == { width: 100, height: 200 }
  let { width, height } = size
  let imgUrl = `https://via.placeholder.com/${width}x${height}`

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <img ref={ref} src={imgUrl} />
    </div>
  )
}
```
