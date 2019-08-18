import { 
  configGet,
  configPost,
  configDelete,
  configPut
} from './configurationFetch'

export class CoursesServices 
{
  constructor() 
  {
    this.uri = 'https://platzi-courses-node.now.sh/courses'
  }

  async getAll()
  {
    let response = null
    let data = null
    let error = null
  
    try 
    { 
      response = await fetch(this.uri,configGet())
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
    let error = null
    let data = null 

    try 
    {
      response = await fetch(`${this.uri}/${id}`,configPut(input))
      data = await response.json()
    }
    catch(e)
    {
      error = e.message
    }

    return {
     error,
     data 
    }
  }

  async remove(id)
  {
    let response = null
    let error = null
    let data = null 

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
     error,
     data 
    }
  }


  async removeStudent(id,idStudent) 
  {
    let response = null
    let data = null
    let error = null
    
    try 
    {
      response = await fetch(`${this.uri}/${id}/students/${idStudent}`,configDelete())
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

  async removeClass(id,idClass) 
  {
    let response = null
    let data = null
    let error = null
    
    try 
    {
      response = await fetch(`${this.uri}/${id}/class/${idClass}`,configDelete())
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

  async addStudent(id,input) 
  {
    let response = null
    let data = null
    let error = null

    try 
    {
      response = await fetch(`${this.uri}/${id}/students`,configPost(input))
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

  async addClass(id,input) 
  {
    let response = null
    let data = null
    let error = null

    try 
    {
      response = await fetch(`${this.uri}/${id}/class`,configPost(input))
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