import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
width: 100vw;
min-height: 100vh;
background-color: #f8961e;

img{
    width: 40%;
    padding: 10px;
    position: relative;
    left: 300px;
}

`;

export const Contenedor = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

`; 

export const Columna = styled.div`
display:flex;
flex-direction: column;
flex-basis:100%;
flex: 1;
justify-content: center;
position: relative;
align-items: center;

  p{
    position: relative;
    right: 160px;
    color:red;
    font-size: 18px;
  }

  input{
      width: 50%;
      margin: 10px;
      padding: 5px;
      border-radius: 10px;
      border: 3px solid #2a9d8f;
  }
  label{
      float:right;
      position: relative;
      right: 170px;
      font-size: 20px;
  }
  button{
      width: 20%;
      padding: 3px;
      margin-top: 10px;
  }
  

  .col{
   display:flex;
   flex-direction: row;
   flex-wrap: wrap;
   width: 50%;
   justify-content: space-around;
   position: relative;
   left: 80px;
  }
  .col p{
      color: black;
      font-size: 18px;
  }
  
`;

export const Linkhome = styled(Link)`
position: relative;
   right: 400px;
   bottom: 20px;
   font-size: 30px;
   height: 35px;
   padding: 3px 5px 3px 2px;
   background-color:#f94144;
   border: 2px solid #43aa8b;
   border-radius: 2rem 2rem;
   color:  #43aa8b;
`





