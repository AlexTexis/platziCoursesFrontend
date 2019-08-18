import styled,{ keyframes,css } from 'styled-components'

const keyframesSpin = keyframes`
  0% 
  {
    transform:rotate(0deg)
  }
  100%
  {
    transform:rotate(360deg)
  }
`

const animation = () => css` animation : .4s ${keyframesSpin} infinite linear`

export const Spinner = styled.div`
  height : 18px;
  width : 18px;
  border-radius:50%;
  border-top:3px solid #fff;
  border-bottom:3px solid transparent;
  border-right:3px solid transparent ;
  border-left:3px solid transparent ;
  ${animation()}
  ${props => props.color && css` border-top:3px solid ${props.color};`}
  ${props => props.width && css` width:${props.width};`}
  ${props => props.height && css` height: ${props.height};`}
  ${props => props.center && css`position : fixed;
    left : 50%;
    top : 50%;
    transform : translate(-50%,-50%);
  `}
`