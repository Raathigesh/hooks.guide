# name

promise-hook

# reference

https://github.com/aiven715/promise-hook

# description

Hook, simplifying dealing with Promises inside of React components

# hook

```javascript
const usePromise = (
  fn,
  { resolve = false, resolveCondition = [] } = {}
) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(resolve);
  const [lastUpdated, setLastUpdated] = useState();
  const [error, setError] = useState();

  const request = (...args) => {
    /*
    Using isValid guard, in order to prevent the cleanup warning.
    */
    let isValid = true;
    setLoading(true);

    fn(...args)
      .then(result => {
        if (!isValid) return;

        setData(result);
        setLastUpdated(Date.now());
      })
      .catch(err => {
        if (!isValid) return;

        setError(err);
      })
      .finally(() => {
        if (!isValid) return;

        setLoading(false);
      });

    /*
    When component will be unmounted, isValid will become false and state setter
    functions will not be envoked on unmounted component.
    */
    return () => {
      isValid = false;
    };
  };

  if (resolve) {
    useEffect(request, resolveCondition);
  }

  return {
    request,
    data,
    isLoading,
    lastUpdated,
    error
  };
};
```

# usage

```javascript
const Demo = () => {
  const { isLoading, data } = usePromise(fetchMovies, { resolve: true });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {data.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

const fetchMovies = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "The Godfather" },
        { id: 2, title: "The Dark Knight" },
        { id: 3, title: "Fight Club" }
      ]);
    }, 1000);
  });
```

# contributors

aiven715
https://avatars1.githubusercontent.com/u/44402489?s=460&v=4
https://github.com/aiven715
