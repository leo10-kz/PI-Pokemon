import styled from 'styled-components';

export const Contenedor = styled.body`
display: flex;
min-width: 100vh;

`;

export const Principal = styled.main`
width: 85%;
display: flex;
`;

export const Sidebar = styled.nav`
width: 15%;
display: flex;
div{
   position: relative;
   top: 40px;
   left: 20px;
}
`;