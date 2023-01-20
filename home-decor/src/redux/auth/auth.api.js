import axios from "axios"


export const authGetApi = ()=>{
    return axios.get('https://mock-server-ge69.onrender.com/api/users');
}

export const getUserAPI = (id)=>{
    return axios.get(`https://mock-server-ge69.onrender.com/api/users/${id}`);
}