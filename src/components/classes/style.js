import styled from 'styled-components'


export const GridClasses = styled.div`
display:grid;
grid-template-columns : repeat(auto-fill,minmax(480px,480px));
justify-content:center;
grid-gap:1em;
@media screen and (max-width:570px) {
  grid-template-columns : 1fr;
}
`

export const ClassesContainer = styled.section`
width:90%;
padding : 1em 0 0 0;
box-sizing:border-box;
margin:0 auto;
` 