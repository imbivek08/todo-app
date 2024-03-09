import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App (){

  const [listTodo, setListTodo]=useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText]);
  }
  return (
  <div className='container'>
    <h1>Todo App</h1>
    
    <div className='todo-body'>
      <div><h2>Tasks</h2></div>
      {listTodo.map((listItem,i)=>{
          return (
          <TodoList key={i} item={listItem}/>
        )
      })}
    </div>
    <Input addList={addList} /> 
  </div>
  );

}

export default App;
