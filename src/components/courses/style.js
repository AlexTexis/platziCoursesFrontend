import styled,{css} from 'styled-components'

export const GridGroups = styled.div`
  display:grid;
  grid-template-columns : repeat(auto-fill,minmax(250px,250px));
  justify-content:center;
  grid-gap:1em;
`

export const GridList = styled.div`
  display:grid;
  grid-template-columns : 1fr 1fr 1fr;
  grid-gap:1em;
`

export const ContainerSplit = styled.div`
  border-bottom:2px solid #E5E5E5;
  margin-bottom:1em;
  padding:1.5em 0;
  box-sizing:border-box;
  ${props => props.center && css`text-align:center;`}
`

export const CoursesContainer = styled.section`
 width:90%;
 padding : 1em 0 0 0;
 box-sizing:border-box;
 margin:0 auto;
` 

export const P = styled.p`
  margin-bottom : 1em;
  color : rgba(128, 128, 128,.7);
`