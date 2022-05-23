import React from "react";


const Todo = ({text, completed, id, todos, setTodos, todo }) => {
    const deleteHandler = () => {
        // todo *********************** will be changed in backend section ************************
      setTodos(todos.filter(el=> el.id !== todo.id))
    };
    const doneHandler = () => {

    };
   return(
    <div className="todo">
        <li className="todoItem">{text}</li>

        <button onClick={doneHandler} className="done-btn">
            <i className="fas fa-check"></i>
            </button>

        <button onClick={deleteHandler} className="delete-btn">
            <i className="fas fa-trash"></i>
            </button>
    </div>
   );
};


export default Todo;