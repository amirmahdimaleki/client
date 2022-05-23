import React from 'react'


const Form =({input, setInput, todo, setTodo}) =>{

    const inputTextHandler = (e)=>{
           setInput(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodo([...todo, 
 // todo $$$$$$$$$$$$$$$$$$$$$$ id might change in backend section $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         {text:input, completed: false, id: Math.random()*1000}
        ]);
        setInput('');
    };
  

    return(
        <form>
        <input value ={input} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;