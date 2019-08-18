export const buildQueryString = (object) =>
  {
    // object -> { name : value }
    let queryString = '' // -> ?name=value || empty
    let arrayKeyValue = [] // -> [name=value,...]

    if(Object.keys(object).length)
    {
      Object.keys(object).forEach( key => {
        arrayKeyValue = [
          ...arrayKeyValue,
          `${key}=${object[key]}`
        ]
      })

      queryString = `?${arrayKeyValue.join('&')}`
    }
   
    return queryString
  }