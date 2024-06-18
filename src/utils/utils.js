export const getExcuse = (url, setExcuse) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const requestOptions = {
    method: 'GET',
    headers: myHeaders
  }

  fetch('http://localhost:7777/' + url, requestOptions)
    .then(response => response.json())
    .then((result) => {
      setExcuse(result)
    })
    .catch(error => console.log('error', error))
    .finally(() => {})
}
