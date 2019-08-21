import { getSessionStorage } from './utils/getSessionStorage'
import { toBase64 } from './utils/covertToBase64'

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
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${getSessionStorage('token')}`
  }),
  body : JSON.stringify(input),
  signal : abortController.signal
})

export const configPostSignin = (email,password) => {
  const data = `${email}:${password}`
  return {
    method : 'POST',
    headers : new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : `Basic ${toBase64(data)}`
    }),
    signal : abortController.signal
  }
}

export const configPut = (input) => ({
  method : 'PUT',
  headers : new Headers({
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${getSessionStorage('token')}`
  }),
  body : JSON.stringify(input),
  signal : abortController.signal
})

export const configDelete = () => ({
  method : 'DELETE',
  headers : new Headers({
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${getSessionStorage('token')}`
  }),
  signal : abortController.signal
})

