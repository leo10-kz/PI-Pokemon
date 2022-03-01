import styled from "styled-components";


export const Wavo = styled.div`
  padding-top: 20px;
  margin-top: 80px;

  img{
      border: 3px solid;
      border-radius: 10px;
      
  }

  h2{
      font-size: 30px;
      color: red;
  }

  button{
    cursor: pointer;
    border: 2px solid;
    border-radius: 1rem 1rem;
    padding: 5px 10px;
    font-weight: bold;
    background-color:white ;
   box-shadow: 2px 2px 2px gray;
  }

  button:hover{
    background:linear-gradient( #e63946 10px, #f1faee 15px) ;
     transform: scale(1.1);
  }
`;
