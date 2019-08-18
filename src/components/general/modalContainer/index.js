import React from 'react'
import ReactDom,{createPortal} from 'react-dom'
import { Container,ButtonsContainer,ChildrenContainer } from './style'
import { H2 } from '../titles/style'
import { Button } from '../button/style'

const Portal = ({children}={}) => createPortal(children,document.getElementById('modal'))

const ModalContainer = ({children,handlerCancel,titleLabel}={}) => (
  <Portal>
    <Container>
      <H2>{titleLabel}</H2>
      <ChildrenContainer>
        { children }
      </ChildrenContainer>
      <ButtonsContainer>
        <Button onClick={handlerCancel} backgroundColor='#98CA3F'>Cancelar</Button>
      </ButtonsContainer>
    </Container>
  </Portal>
)

export default ModalContainer


//Stucture Modal Container


//----------------------------
//           titulo          |
//***************************| 
//                           | 
//          contenido        |
//         (children)        |
//                           |
//***************************|                          
//        boton cancel       |
//----------------------------

