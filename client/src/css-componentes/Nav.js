import styled from "styled-components";


export const Contenedor =  styled.div`
position: relative;
top: 65px;

`;

export const Navegacion = styled.nav`
//float: left;
input{
    border: 2px solid #577590;
    border-radius: 10px;
   padding: 5px 25px 5px 10px;
}
button{
    color: white;
    background-color: #90be6d;
    border: none;
    border-radius:1rem 1rem;
    padding: 7px;
    margin-left: 2px;
     :hover{
       background-color : #43aa8b ;
       color:yellow
    }
}
`;