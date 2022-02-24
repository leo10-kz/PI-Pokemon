import React from 'react';
import { Link } from 'react-router-dom';
import { Gopage, Btn } from '../css-componentes/Landing';


const LandingPage = () => {
  return (
   <div>
      <Gopage>
        
        <Link to='/home'>
           <Btn type='submit'>GO</Btn>
        </Link>
      </Gopage>
   </div>
  )
}

export default LandingPage

