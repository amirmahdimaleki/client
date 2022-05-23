import React from "react";
import Todo from './Todo';



const TodoList = ({todos, setTodos}) => {
    return(
    <div className="todo-container">
         <ul className="todo-list">
            {todos.map(todo=>
              <Todo key={todos.id} text={todos.text} completed={todos.completed} id={todos.id}  todo={todo}  todos={todos} setTodos={setTodos} />  
                )}
         </ul>
    </div>
    );
};

export default TodoList;