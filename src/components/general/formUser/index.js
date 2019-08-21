import React from 'react'
import logo from '../../../static/platzi.png'

//styled components
import { FormUserContainer,QuestionAccountContainer,Container } from './style'
import { H2 } from '../titles/style'
import { InputStyled } from '../input/style'
import { Button } from '../button/style'
import { LinkRoute } from '../link/style'
import { Spinner } from '../spinner/style'
import Error from '../notifications/error'

//hooks
import { useInputValue } from '../../../hooks/useInputValue'

const FormUser = ({title,btnTitle,questionAccount,routeLink,onSubmit,isLoading,isError}={}) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({
      email : email.value,
      password : password.value
    })
  }

  return (
    <Container>
      <FormUserContainer onSubmit={handleSubmit}>
        <img width={50} src={logo}/>
        <H2>{title}</H2>
        <InputStyled {...email} placeholder='Tu email' type='email'/>
        <InputStyled {...password} placeholder='Tu contraseña' type='password'/>
        <Button backgroundColor='#8DC83B' type='submit' disabled={email.value && password.value ? false : true}>
          { 
            isLoading ? <Spinner/> :`${btnTitle }`
          }
        </Button>
        { isError && <Error message={isError}/> }
      </FormUserContainer>
      <QuestionAccountContainer>
        <LinkRoute to={routeLink} style={{color : '#182C3F'}}>
          { questionAccount }
        </LinkRoute>
      </QuestionAccountContainer>
    </Container>
  )
}

export default FormUser

