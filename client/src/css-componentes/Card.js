import styled from 'styled-components';

export const Card = styled.div`
width: 310px;
height: 430px;
overflow: hidden;
border: 5px solid #ffb703;
border-radius: 15px;
margin:20px;
text-align: center;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
 p{
     font-size: 17px;
 }
 span{
     font-size: 20px;
 }

`;

export const Title = styled.header`
//margin-bottom: 10px;
padding: 1px;
border-bottom: 5px solid  #f9c74f ;
border-radius: 10px;
background-color: #43aa8b;
`;

export const Pie = styled.footer`
 background: #90be6d;
 display:flex;
 flex-wrap: row;
 flex-wrap: wrap;
 justify-content: space-around;
 border-top: 5px solid #f9c74f
`;

export const Image = styled.div`
  height: 250px;
  display: flex;
  background-color: #ced0cc ;
      justify-content:center;
      align-items: center;
  img{
      width: 42%;
      
  }
  
  
`;