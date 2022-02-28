import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Linked = styled(Link)`
font-weight: bold;
text-align: center;
text-decoration: none;
background-color:#f1faee ;
padding: 10px 15px;
border:4px solid #FF0000;
border-radius: 1rem ;
color:black ;

  :hover{
     border:4px solid black;
 }
`;
export const Conteiner = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-evenly;

input{
font-weight:bold ;
text-align: center;
background-color:#f1faee;
padding: 10px 15px;
border-radius: 1rem ;
color:black ; 
border:4px solid #FF0000;
cursor: pointer;
}
input:hover{
    
     border:4px solid black;
 
}
`;

