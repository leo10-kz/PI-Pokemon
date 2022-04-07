import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
width: 310px;
height: 430px;
overflow: hidden;
border: 2px solid ;
border-radius: 15px;
margin:20px;
text-align: center;

//font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
 p{
     font-size: 17px;
     color: black;
     font-weight: bold;
 }
 .tipo{
     background-color: #abc4ff;
     border-radius: 5px;
 }
 span{
     font-weight: bold;
     font-size: 20px;
     color: black;
     //background-color:#e63946 ;
     //border: 1px solid;
     border-radius: 5px;
     
 }

 h2{
     margin: 0;
     color: black;
 }


`;

export const Title = styled.header`
//margin-bottom: 10px;
display: flex;
align-items: center;
justify-content: center;
height: 50px;
padding: 1px;
border-bottom: 3px solid black ;
border-radius: 10px 10px 0 0;
background-color: #FF0000;
`;

export const Pie = styled.footer`
 background-color: #f1faee;
 display:flex;
 height: 100%;
 flex-wrap: row;
 flex-wrap: wrap;
 justify-content: space-around;
 border-top: 3px solid black
`;

export const Image = styled.div`
  height: 250px;
  display: flex;
  background-color: #808080;
      justify-content:center;
      align-items: center;
  img{
      width: 42%;
      
  }
  
`;

export const Links = styled(Link)`
text-decoration: none;


`;