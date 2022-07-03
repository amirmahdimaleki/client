import axios from "axios";

const baseUrl = "";

export const  getTheList = async () =>{
    try {
        const todos = await axios.get(baseUrl);
        return todos
    } catch (err) {
        console.log(err);
    }
};

export const  getMembers = async () =>{
    try {
        const members = await axios.get(baseUrl);
        return members
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

export const  updateMember = async (id, member) =>{
    try {
         await axios.patch(`${baseUrl}/${id}`, member);
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

export const  createMember = async (id, member) =>{
    try {
         await axios.post(baseUrl, member);
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

export const  deleteMember = async (id, member) =>{
    try {
         await axios.delete(`${baseUrl}/${id}`, member);
    } catch (err) {
        console.log(err);
    }
};
