import React,{ useContext } from 'react'
import { CardContainer,IconRemove,IconView } from './style'
import { FaTrash,FaEye } from 'react-icons/fa'
import  { Spinner } from '../../spinner/style'
import { H3 } from '../../titles/style'

//Context
import { AppContext } from '../../../../context'

const style = {
  marginBottom : '0'
}

const CardRemove = ({textContent,onClickRemove,onClickView,isShowView,loading}={}) => {
  const { auth } = useContext(AppContext)

  return (
    <CardContainer>
      <H3 style={style}>
      { 
        textContent 
      }
      </H3> 
      {
        isShowView &&
        <IconView onClick={onClickView}>
          <FaEye size={18}/>
        </IconView>
      }
      {
        auth &&
        <IconRemove onClick={onClickRemove}>
          { 
            loading ? <Spinner/> : <FaTrash size={18}/>
          } 
        </IconRemove>
      }
    </CardContainer>
  )
}

export default CardRemove
