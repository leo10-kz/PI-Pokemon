import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Conteiner = styled.body`
display: flex;
min-width: 100vh;
background-color:#f9c74f ;
background-size: cover;
min-height:100vh;
`; 

export const Detalles = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
div{
    position: relative;
    top: 10px;
}
p, h2, img {
    margin: 30px;
}
h2{
    font-size: 30px;
    text-transform: uppercase;
}
p{
    font-size: 20px;
    
}
h3{
    font-size: 25px;  
}
img{
    background-color:#97a97c;
    border: 2px solid;
    border-radius: 20px;
}

`;

export const Estadisticas = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: left;

div{

 h2{
     font-size: 30px;
     text-transform: uppercase;
     position: relative;
     bottom: 40px;
     left: 10px;
 }


}

.progreso{
    background-color:#caf0f8;
    height: 2px;
    padding: 15px ;
    width: 450px;
    margin:30px 0;
    border-radius:10px;
    border: 4px  solid;
    
 }

 .progreso span{
     display: flex;
     position: relative;
     bottom: 10px;
     right: 10px;
     height: 3VH;
     border-radius:5px;
     box-shadow:0 1px 0 rgba(255,255,255, .5)inset;
     transition:width .4s  ease-in-out;
     background: #ccc ;
 }
 .rojo span{
   background-color: crimson;
 }
 .azul span{
     background-color: blue;
 }
 .amarillo span{
     background-color: yellow;
 }
 .verde span{
     background-color: green;
 }
 .marron span {
     background-color: brown;
 }
 .naranja span{
     background-color: orange;
 }

`;

 
 export const Linkshome = styled(Link)`
   position: relative;
   top: 30px;
   left: 30px;
   font-size: 30px;
   height: 35px;
   padding: 3px 5px 3px 2px;
   background-color:#f94144;
   border: 2px solid #43aa8b;
   border-radius: 2rem 2rem;
   color:  #43aa8b;
 `;
 