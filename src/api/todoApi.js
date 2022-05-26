import axios from "axios";

const baseUrl = "https://apsignals.herokuapp.com/";

export const  getTheList = async () =>{
    try {
        const todos = await axios.get(baseUrl);
        return todos
    } catch (err) {
        console.log(err);
    }
};

export const  updateTodo = async (id, todo) =>{
    try {
         await axios.patch(`${baseUrl}/${id}`, todo);
    } catch (err) {
        console.log(err);
    }
};

export const  createTodo = async (id, todo) =>{
    try {
         await axios.post(baseUrl, todo);
    } catch (err) {
        console.log(err);
    }
};

export const  deleteTodo = async (id, todo) =>{
    try {
         await axios.delete(`${baseUrl}/${id}`, todo);
    } catch (err) {
        console.log(err);
    }
};
