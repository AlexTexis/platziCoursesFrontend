import styled from 'styled-components'

export const CardContainer = styled.h4`
  position:relative;
  background-color:#fff;
  border-left:5px solid #E5E5E5;
  box-shadow: 0 4px 12px -6px rgba(0,0,0,.2);
  padding : .4em;
  border-radius:8px;
  box-sizing:border-box;
  color:#808080;
  font-size:1em;
  display:flex;
  align-items:center;
  position:relative
  box-sizing:border-box;
  font-size:1em;
  transition:.3s;
  display:flex;
  justify-content:space-between;
`

export const ButtonsContainer = styled.div`
  display : flex;
`

export const Label = styled.h3`
  padding : 0 1em;
  box-sizing : border-box;
  background-image : linear-gradient(45deg,#00A8C5 ,#FFFF7E);
  color : #fff;
  font-size : 1em;
  display:flex;
  align-items:center;
  border-radius :5px;
  margin-right : .2em;
`

export const IconRemove = styled.div`
  height : 35px;
  line-height : 35px;
  width : auto;
  border-radius:5px;
  padding : 0 1em;
  color:#fff;
  background-color:#FF4E41;
  cursor:pointer;
  display:flex;
  align-items:center;
`