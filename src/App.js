import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';



function App() {

  //  to handle the input and its value
  const [input, setInput] = useState("");
  // for making the list of todos
  const [todos, setTodos]= useState([]);
  // todo $$$$$$$$$$$ may change by backend operations $$$$$$$$$$$$$
  // for editing the list of todos
  const [editing, setEditiong]= useState(false);

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
