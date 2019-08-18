import styled,{css} from 'styled-components'

export const WidgetContainer = styled.div`
  width : 50px;
  height : 50px;
  border-radius : 50%;
  color: #fff;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  ${ props => css`background-color : ${props.backgroundColor}` }
`