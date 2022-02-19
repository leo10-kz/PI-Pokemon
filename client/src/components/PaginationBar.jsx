import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set_current } from '../redux/actions';

const PaginationBar = () => {
  const pages =  useSelector(state => state.pages);
  const current = useSelector(state => state.current)
  const distpach = useDispatch();

  const next = () =>{
      let index = current+1
      if(index >= pages.length){
          return null
      }
      distpach(set_current(index))
  }

  const prev = () =>{
      let index = current-1;
      if(index < 0){
          return null
      }
      distpach(set_current(index)) 
  }

  const onClick = (i) =>{ 
    
    distpach(set_current(i)) 
  }
  

  return (    
   <div>
     {pages.map((p,i)  => {
       return(<button onClick={() => onClick(i)} key={i}>{i+1}</button>)
      })}
   {current > 0 && <button onClick={prev}>prev</button>}  
  {current < pages.length-1 && <button onClick={next}>next</button>}
   </div>
  )
}

export default PaginationBar

