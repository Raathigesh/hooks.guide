export function fetchDoc(path) {
  return fetch(`/docs/${path}`).then(function(response) {
    return response.text();
  });
}
