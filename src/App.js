import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';



function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos]= useState([]);

  return (
    <div className="App">
    <header>List your Todo's</header>
    {/*  props's are good things; use them */}
    <Form todos={todos}  setTodos={setTodos}  input={input} setInput={setInput} />
    <TodoList todos={todos}  setTodos={setTodos} />
    </div>
  );
};

export default App;
