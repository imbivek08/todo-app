import React, { useState } from 'react'
import './Input.css'

function Input(props) {

  const [inputText,setInputText] = useState('');

  return (
    <div className='set-input'>
      <input id='input' 
      className='input'
      value={inputText} 
      placeholder="What's do you need to do?"
      onChange={e=>{
        setInputText(e.target.value)
      }} />
      <button
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}> +  Add</button>
    </div>
  )
}

export default Input
