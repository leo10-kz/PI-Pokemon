import styled from "styled-components";


export const Contenedor =  styled.div`
position: relative;
top: 65px;

`;

export const Navegacion = styled.nav`
//float: left;
input{
    border: 3px solid #FF0000;
    border-radius: 10px;
   padding: 5px 35px 5px 10px;
   position: relative;
   left: 80px;
}
button{
position:relative;
left: 80px;
cursor: pointer;
font-size: 15px;
padding: 6px 6px;
background: linear-gradient( #e63946 9px, #f1faee 20px);
border: 1px black;
border-radius: 50%;
color: #f1faee;
transition:all 1s;
 :hover{
    transform: rotateY(360deg);
 }
}
`;