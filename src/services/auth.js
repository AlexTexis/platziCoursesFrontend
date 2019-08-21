import {
  configPost,
  configPostSignin
} from './configurationFetch'

export class AuthServices
{
  constructor()
  {
    this.uri = 'https://platzi-courses-node.now.sh'
  }

  async signup(input) 
  {
    let response = null
    let error = null
    let data = null

    try 
    { 
      response = await fetch(`${this.uri}/signup`,configPost(input))
      data = await response.json()
      if(response.status == 409) error = data.message || 'User already exist' //conflict(user already exist)        
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
  
  async signin({email,password})
  {
    let response = null
    let error = null
    let data = null

    try 
    { 

      response = await fetch(`${this.uri}/signin`,configPostSignin(email,password))
      data = await response.json()
      if(response.status == 401) error = data.message || 'Email or Password incorrect' //conflict(user already exist)        

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
}