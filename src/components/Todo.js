import React from "react";


const Todo = ({text,  todos, setTodos, todo }) => {
    const deleteHandler = () => {

        // todo *********************** will be changed in backend section ************************
           setTodos(todos.filter(el=> el.id !== todo.id))
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

        <button onClick={deleteHandler} className="delete-btn">
            <i className="fas fa-trash"></i>
            </button>
    </div>
   );
};


export default Todo;