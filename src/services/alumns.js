import { isUnauthorized,redirect } from './utils/isUnauthorized'
import { 
  configGet,
  configPost,
  configDelete,
  configPut
 } from './configurationFetch'

import { buildQueryString } from './utils/buildQueryString'

export class AlumnsServices 
{
  constructor() 
  {
    this.uri = 'https://platzi-courses-node.now.sh/students'
  }

  async getAll(filter={})
  {
    let response = null
    let data = null
    let error = null

    try 
    { 
      response = await fetch(`${this.uri}${buildQueryString(filter)}`,configGet())
      data = await response.json()
    }
    catch(e)
    {
      error = e.message
    }

    return {
      data,
      error
    }
  }

  async create(input) 
  {
    let response = null
    let data = null
    let error = null

    try 
    {
      response = await fetch(this.uri,configPost(input))
      if(isUnauthorized(response)) return redirect()      
      data = await response.json()
    }
    catch(e)
    {
      error = e.message
    }

    return {
      data,
      error
    }
  }

  async update(id,input) 
  {
    let response = null
    let data = null
    let error = null

    try 
    {
      response = await fetch(`${this.uri}/${id}`,configPut(input))
      if(isUnauthorized(response)) return redirect()      
      data = await response.json()
    }
    catch(e)
    {
      error = e.message
    }

    return {
      data,
      error
    }
  }

  async remove(id) 
  {
    let response = null
    let data = null
    let error = null

    try 
    {
      response = await fetch(`${this.uri}/${id}`,configDelete())
      if(isUnauthorized(response)) return redirect()      
      data = await response.json()
    }
    catch(e)
    {
      error = e.message
    }

    return {
      data,
      error
    }
  }
}