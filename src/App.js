import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Todo from './components/TodoList';



function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo]= useState([]);

  return (
    <div className="App">
    <header>List your Todo's</header>
    {/*  props's are good things; use them */}
    <Form todo={todo}  setTodo={setTodo}  input={input} setInput={setInput} />
    <Todo />
    </div>
  );
};

export default App;
