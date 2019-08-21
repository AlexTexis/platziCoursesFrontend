import React,{useContext} from 'react'
import { HeaderContainer,LogoContainer } from './style'
import { H2 } from '../general/titles/style'
import { LinkRouteBtn } from '../general/link/style'
import { Button } from '../general/button/style'
import { navigate } from '@reach/router'

//context
import { AppContext  } from '../../context'

const Header  = ({showBtnSession}={}) => {
 const { auth,closeSession } = useContext(AppContext)

 const renderBtnSession = () => {
  if(!showBtnSession) return false
  if(auth) return (
    <Button 
        onClick={closeSession} 
        style={{marginBottom : '0'}}
        backgroundColor='#98CA3F'
      >
        Cerrar Sesión
      </Button>
  )
  
  return (
    <LinkRouteBtn to='/signin' style={{marginBottom : '0'}}>
      Iniciar Sesión
    </LinkRouteBtn>
  )
 }

 return ( 
  <HeaderContainer>
    <LogoContainer onClick={() => navigate('/')}>
     <img 
      style={{width : '35px'}}
      src='data:image/png;base64,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' 
      alt='platzi_logo'/>
      <H2 style={{marginBottom : '0'}}>Platzi Courses</H2>
    </LogoContainer>
    {
     renderBtnSession() 
    }
  </HeaderContainer>
 )
}

export default Header