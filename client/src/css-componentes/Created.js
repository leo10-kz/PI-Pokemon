import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
width: 100vw;
min-height: 100vh;
background-image: linear-gradient( #e63946 85px, #f1faee 20px);

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
background-color: #808080;
height: 80vh;
border-radius: 15px;

  p{
    //position: relative;
    //right: 80px;
    color:red;
    font-size: 18px;
    font-weight: bold;
  }

  input{
      width: 50%;
      margin: 8px;
      padding: 5px;
      border-radius: 10px;
      border: 3px solid ;
  }
  label{
      float:right;
      position: relative;
      right: 170px;
      font-size: 20px;
  }
  button{
      font-weight: bold;
      width: 20%;
      padding: 3px;
      margin-top: 10px;
      background: linear-gradient( #e63946 10px, #f1faee 15px);
      border-radius: 10px;
      border: 2px solid;
      
  }
  
 button:hover{
     background: linear-gradient( yellow 10px, #f1faee 15px);
 }

  .col{
   display:flex;
   flex-direction: row;
   flex-wrap: wrap;
   width: 50%;
   justify-content: space-around;
   position: relative;
   left: 80px;
   border: 3px solid;
   border-radius:25px;
   background-color: #e63946;
  }
  .col p{
      color: black;
      font-size: 18px;
  }
  
`;

export const Linkhome = styled(Link)`
text-decoration: none;
position: relative;
   right: 410px;
   bottom: 40px;
   height: 25px;
   padding: 2px;
   color:  black;

   input{
       cursor: pointer;
       border: 2px solid;
       border-radius: 1rem 1rem;
       padding: 5px 10px;
       font-weight: bold;
       background-color:white ;
       box-shadow: 2px 2px 2px gray;
   }
   input:hover{
     background:linear-gradient( #e63946 10px, #f1faee 15px) ;
     transform: scale(1.1);
   }
`;





