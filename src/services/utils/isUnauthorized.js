export const isUnauthorized = (responseRequest) => responseRequest.status == 401 ? true : false

export const redirect = () => {
  window.sessionStorage.removeItem('token')
  window.location.href = '/signin'
}
