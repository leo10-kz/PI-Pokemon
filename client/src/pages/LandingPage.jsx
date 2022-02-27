import React from 'react';
import { Link } from 'react-router-dom';
import { Gopage, Btn } from '../css-componentes/Landing';
import Texto from '../assets/apipoke.png' 

const LandingPage = () => {
  return (
   <div>
      <Gopage>
        <img src={Texto} alt="" />
        <Link to='/home'>
           <Btn type='submit'>GO</Btn>
        </Link>
      </Gopage>
   </div>
  )
}

export default LandingPage

