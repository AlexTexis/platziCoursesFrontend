import styled from 'styled-components';

export const CardContainer = styled.article`
  width : auto;
  height : 260px;
  background-color:#fff;
  border-radius : 8px;
  box-shadow: 0 4px 12px -6px rgba(0,0,0,.2);
  box-sizing:border-box;
  font-size:1em;
  transition:.3s;
  cursor:pointer;
  overflow:hidden;
  &:hover 
  {
    box-shadow: 0 4px 20px -6px rgba(0,0,0,.2);
    transform:translateY(-5px)
  }
`

export const CoverCourse = styled.div`
  width : 100%;
  height : 60px;
  background-image:linear-gradient(45deg, #1c3643 0, #273b47 25%, #1e5372);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1em;
  margin:0 auto;
  margin-bottom:1.8em;
`