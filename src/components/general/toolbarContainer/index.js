import React,{useContext} from 'react'
import { Container } from './style'
import Add from '../widgets/add'

//Context
import { AppContext } from '../../../context'

const Toolbar = ({onClickAdd}={}) => {
  const { auth } = useContext(AppContext)

  const render = () => {
    if(auth) return (
      <Container>
        <Add backgroundColor='#98CA3F' onClick={onClickAdd}/>
      </Container>
    )

    return false
  }

  return render()
}

export default Toolbar