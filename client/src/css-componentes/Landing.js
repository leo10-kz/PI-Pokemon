import styled from 'styled-components';
import Fondo from '../assets/thumb-1920-273289.jpg'

export const Gopage = styled.div`
  background-image:url(${Fondo});
  background-size: contain;
  background-repeat: round;
  width: 100vw;
  height: 100vh; 
   display: flex;
   justify-content: end;
   align-items: center;

   img{
      position: relative;
      bottom: 250px;
      left: 100px;
   }
   
`;

export const Btn = styled.button`
cursor: pointer;
font-size: 25px;
padding: 40px 40px;
background: linear-gradient( #e63946 55px, #f1faee 20px);
border: 3px solid ;
border-radius: 22rem 22rem;
position: relative;
right: 40px;
transition:all 1s;
 :hover{
    transform: rotateY(360deg);
}
`;