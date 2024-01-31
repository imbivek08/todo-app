import React from 'react'
import './TodoList.css'
function TodoList(props) {
  if(props.item===""){
    return;
  }else{
  return (
    <div>
      <li className='list'>
        {props.item}
      </li> 
    </div>
    
  )}
}

export default TodoList
