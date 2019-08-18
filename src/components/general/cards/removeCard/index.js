import React from 'react'
import { CardContainer,IconRemove,IconView } from './style'
import { FaTrash,FaEye } from 'react-icons/fa'
import  { Spinner } from '../../spinner/style'
import { H3 } from '../../titles/style'

const style = {
  marginBottom : '0'
}

const CardRemove = ({textContent,onClickRemove,onClickView,isShowView,loading}={}) => (
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
    <IconRemove onClick={onClickRemove}>
    { 
       loading ? <Spinner/> : <FaTrash size={18}/>
    } 
    </IconRemove>
  </CardContainer>
)

export default CardRemove
