import React, { useState,useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import Nav from "./components/Nav"
import TodoList from './components/TodoList';
import { getTheList } from "./api/todoApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from './components/History';
import Members from './components/Members';



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
    {/*  props's are good things; use them ^_^ */}
    {/* <Form todos={todos}  setTodos={setTodos}  input={input} setInput={setInput} />
    <TodoList todos={todos}  setTodos={setTodos} /> */}
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Form todos={todos}  setTodos={setTodos}  input={input} setInput={setInput} />} />
        <Route path="/" element={<TodoList todos={todos}  setTodos={setTodos} />} />
        <Route path="/history" element={<History/>} />
        <Route path="/members" element={<Members/>} />
      </Routes>
    </Router>
    </div>
  );

};

export default App;
