import React from 'react'
import {createTodo} from "../api/todoApi"

const Form =({input, setInput, todos, setTodos}) =>{

    const inputTextHandler = (e)=>{
           setInput(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, 
 // todo $$$$$$$$$$$$$$$$$$$$$$ id might change in backend section $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         {text:input, completed: false, id: Math.random()*1000}
        ]);
        setInput('');
        // maybe its input!
        createTodo(todos)
    };
  

    return(
      <>
      <header>List your Todo's</header>
      <form>
        <input value ={input} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        {/* <div className="select">
          <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */}
      </form>
      </>
    );
  };

export default Form;