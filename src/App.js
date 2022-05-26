import React, { useState,useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { getTheList } from "./api/todoApi";




function App() {

  //  to handle the input and its value
  const [input, setInput] = useState("");
  // for making the list of todos
  const [todos, setTodos]= useState([]);
  // todo $$$$$$$$$$$ may change by backend operations $$$$$$$$$$$$$
  // for editing the list of todos
  const [editing, setEditiong]= useState(false);

  useEffect(()=>{

    getTheList().then(({data})=>setTodos(data.todos))
  }, [])
  
   
  
  return (
    <div className="App">
    <header>List your Todo's</header>
    {/*  props's are good things; use them ^_^ */}
    <Form todos={todos}  setTodos={setTodos}  input={input} setInput={setInput} />
    <TodoList todos={todos}  setTodos={setTodos} />
    </div>
  );

};

export default App;
