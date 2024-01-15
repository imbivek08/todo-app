import React from 'react'
import './TodoList.css'
function TodoList(props) {
  return (
    <div>
      <li className='list'>
        {props.item}
      </li> 
    </div>
    
  )
}

export default TodoList
