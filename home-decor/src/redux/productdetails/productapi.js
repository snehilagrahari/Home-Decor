
import axios from "axios"



export const productapicall= (id)=>{
          return axios.get(`https://mock-server-ge69.onrender.com/api/Products/${id}`);

     // return axios.get(`https://mock-server-ge69.onrender.com/api/Products/${id}`).then((res)=> res.data)
}



