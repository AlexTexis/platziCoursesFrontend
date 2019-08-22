import styled,{css} from 'styled-components'

export const H1 = styled.h1`
  font-size : 1.8em;
  margin-bottom:.5em;
  ${props => props.fontSize && css`font-size : ${props.fontSize}`}
  ${props => props.color && css`color : ${props.color}`}
  ${props => props.center && css`text-align : center`}
`
export const H2 = styled.h2`
  font-size : 1.3em;
  margin-bottom:1em;
  ${props => props.fontSize && css`font-size : ${props.fontSize}`}
  ${props => props.color && css`color : ${props.color}`}
  ${props => props.center && css`text-align : center`}
`
export const H3 = styled.h3`
  font-size : 1em;
  margin-bottom:1em;
  ${props => props.fontSize && css`font-size : ${props.fontSize}`}
  ${props => props.color && css`color : ${props.color}`}
  ${props => props.center && css`text-align : center`}
`

export const H4 = styled.h4`
  font-size : .9em;
  margin-bottom:1em;
  ${props => props.fontSize && css`font-size : ${props.fontSize}`}
  ${props => props.color && css`color : ${props.color}`}
  ${props => props.center && css`text-align : center`}
`

//paragraph
export const P = styled.p`
  margin-bottom : 1em;
  color : rgba(128, 128, 128,.7);
  ${props => props.center && css`text-align : center`}
  ${props => props.marginBottom && css`margin-bottom:${props.marginBottom}`}
`