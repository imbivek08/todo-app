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
  <div>
    <Input addList={addList} />
    <h1>TODO</h1>
    {listTodo.map((listItem,i)=>{
      return (
        <TodoList key={i} item={listItem}/>
      )
    })}
    
  </div>
  );

}

export default App;
