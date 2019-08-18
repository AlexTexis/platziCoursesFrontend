import {
configGet,
configPost,
configDelete
} from './configurationFetch'

import { buildQueryString } from './utils/buildQueryString';

export class ClassesServices 
{
  constructor()
  {
    this.uri = 'https://platzi-courses-node.now.sh/classes'
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
      response = await fetch(`${this.uri}`,configPost(input))
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