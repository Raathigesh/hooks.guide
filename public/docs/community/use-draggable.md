# name

useDraggable

# reference

https://stackblitz.com/edit/usedraggable

# description

Simple implementation of draggable element using hooks 

# hook

```
function useDraggable(el) {
  const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 })
  useEffect(() => {
    const handleMouseDown = (event) => {
      const startX = event.pageX - dx
      const startY = event.pageY - dy
      const handleMouseMove = (event) => {
        const newDx = event.pageX - startX
        const newDy = event.pageY - startY
        setOffset({ dx: newDx, dy: newDy })
      }
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }, { once: true })
    }
    el.current.addEventListener('mousedown', handleMouseDown)
    return () => {
      el.current.removeEventListener('mousedown', handleMouseDown)
    }
  }, [dx, dy])

  useEffect(() => {
    el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
  }, [dx, dy])
}
```

# usage

```
function Demo() {
  const el = useRef()
  useDraggable(el)

  return (<div ref={el} className="DraggableBox"></div>)
}
```

# contributors

AlahmadiQi8
https://avatars0.githubusercontent.com/u/3461501?s=460&v=4
https://github.com/AlahmadiQ8
