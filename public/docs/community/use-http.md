# name

useFetch

# reference

https://github.com/alex-cory/use-http

# hook

```
// too big to fit here
```

# usage

```
import useFetch from 'use-http'

function Todos() {
  const [todos, setTodos] = useState([])

  const request = useFetch('https://example.com')

  useEffect(() => {
    initializeTodos()
  }, [])

  async function initializeTodos() {
    const initialTodos = await request.get('/todos')
    setTodos(initialTodos)
  }

  async function addTodo() {
    const newTodo = await request.post('/todos', {
      title: 'no way',
    })
    setTodos(oldTodos => [...oldTodos, newTodo])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {request.error && 'Error!'}
      {request.loading && 'Loading...'}
      {todos.length > 0 && todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      )}
    </>
  )
}
```
