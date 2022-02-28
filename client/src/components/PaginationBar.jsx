import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set_current } from '../redux/actions';
import { Boton, NextPrev, Pag } from '../css-componentes/Pagination';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

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
   <Pag>
     {current > 0 && <NextPrev onClick={prev}><LeftCircleOutlined /></NextPrev>}  
     {pages.map((p,i)  => {
       return(<Boton varian={i} onClick={() => onClick(i)} key={i}>{i+1}</Boton>)
      })}
  {current < pages.length-1 && <NextPrev onClick={next}><RightCircleOutlined /></NextPrev>}
   </Pag>
  )
}

export default PaginationBar

