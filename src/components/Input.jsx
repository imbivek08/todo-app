import React, { useState } from 'react'
import './Input.css'

function Input(props) {

  const [inputText,setInputText] = useState('');

  return (
    <div className='setInput'>
      <input id='input' 
      className='input'
      value={inputText} 
      placeholder='Add the Task'
      onChange={e=>{
        setInputText(e.target.value)
      }} />
      <button className='sendInput'
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>Add</button>
      <div className='demo'>
        {setInputText}</div>
    </div>
  )
}

export default Input
