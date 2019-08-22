import styled from 'styled-components';

export const CardContainer = styled.article`
  width : 350px;
  height : auto;
  background-color:#fff;
  border-radius : 8px;
  box-shadow: 0 4px 12px -6px rgba(0,0,0,.2);
  box-sizing:border-box;
  font-size:1em;
  transition:.3s;
  cursor:pointer;
  overflow:hidden;
  margin:10px;
  &:hover 
  {
    box-shadow: 0 4px 20px -6px rgba(0,0,0,.2);
    transform:translateY(-5px)
  };
  @media screen and (max-width:460px) {
    width : 100%;
    margin:0;
    margin-bottom:10px;
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
`

export const TitleInfo = styled.p`
  height : 40px;
  line-height : 40px;
  text-align:center;
  color : rgba(128, 128, 128,.7);
  font-size : 1em;
` 

export const CourseTitle = styled.h3`
  width :280px;
  text-align:center;
  line-height : 20px;
`

export const ClassContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom : 1px solid #eee;
  padding:0 .7em;
`

export const ClassTitle = styled.p`
  height : 40px;
  line-height : 40px;
  text-align:left;
  font-size : .9em;
  color : #182C3F;
`