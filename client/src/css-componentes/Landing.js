import styled from 'styled-components';
import Fondo from '../assets/pokemon-squirtle-pokemon-starter-pokemon-water-pokemon-wallpaper-preview.jpg'

export const Gopage = styled.div`
  background-image:url(${Fondo});
  background-size: cover;
  width: 100vw;
  height: 100vh;
   display: flex;
   justify-content: end;
   align-items: center;
   
`;

export const Btn = styled.button`
cursor: pointer;
font-size: 25px;
padding: 40px 40px;
background: linear-gradient( #e63946 55px, #f1faee 20px);
border: 3px solid ;
border-radius: 55px  55px;
position: relative;
right: 40px;
transition:all 1s;
 :hover{
    transform: rotateY(360deg);
}
`;