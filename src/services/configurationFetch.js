//abort suscription api fetch
const abortController = new AbortController()

export const configGet = () => ({
  method : 'GET',
  headers : new Headers({
    'Content-Type' : 'application/json'
  }),
  signal : abortController.signal
})

export const configPost = (input) => ({
  method : 'POST',
  headers : new Headers({
    'Content-Type' : 'application/json'
  }),
  body : JSON.stringify(input),
  signal : abortController.signal
})

export const configPut = (input) => ({
  method : 'PUT',
  headers : new Headers({
    'Content-Type' : 'application/json'
  }),
  body : JSON.stringify(input),
  signal : abortController.signal
})

export const configDelete = () => ({
  method : 'DELETE',
  headers : new Headers({
    'Content-Type' : 'application/json'
  }),
  signal : abortController.signal
})

