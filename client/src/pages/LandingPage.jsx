import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage = () => {
  return (
   <div>
       <h1>Pokemon Api</h1>
        <Link to='/home'>
           <button type='submit'>Vamos</button>
        </Link>
   </div>
  )
}

export default LandingPage

