import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Linked = styled(Link)`
text-decoration: none;
background-color:#43aa8b ;
padding: 10px;
border:4px solid #90be6d;
border-radius: 1rem ;
color:#f1faee ;
`;
export const Conteiner = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-evenly;

input{
background-color:#43aa8b ;
padding: 10px;
border-radius: 1rem ;
color:#f1faee ; 
border:4px solid #90be6d;
cursor: pointer;
}
`;

