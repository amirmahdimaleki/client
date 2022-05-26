import React from "react";
import {deleteTodo} from "../api/todoApi"
// import { useNavigate } from "react-router-dom";


const Todo = ({text,  todos, setTodos, todo }) => {
      // const navigate = useNavigate();

      const deleteHandler = (id) => {

        // todo *********************** will be changed in backend section ************************
           setTodos(todos.filter(el=> el.id !== todo.id))
           deleteTodo(id);
          //  navigate(0);
    }; 


    const doneHandler = () => {

         setTodos(
             todos.map((item) => {
               if(item.id === todo.id){
                 return {...item, completed : !item.completed}
                }    
                  return item;  
             })
           ) 
        };

   return(
    <div className="todo">
        <li className={`todoItem ${todo.completed ? "completed" : ""}`}>{text}</li>

        <button onClick={doneHandler} className="done-btn">
            <i className="fas fa-check"></i>
            </button>

        <button onClick={()=> deleteHandler(todo.id)} className="delete-btn">
            <i className="fas fa-trash"></i>
            </button>
    </div>
   );
};


export default Todo;