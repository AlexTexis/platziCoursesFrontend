import styled,{ css } from 'styled-components'

export const Button = styled.button`
  height : 35px;
  padding : .4em 1em;
  box-sizing:border-box;
  background-color:#ED1E79;
  color:#fff;
  border:none;
  border-radius:3px;
  margin-bottom:1em;
  ${ props => props.backgroundColor && css`
    background-color:${props.backgroundColor}
    `
  }

  &[disabled] {
    opacity : .4;
  }
`