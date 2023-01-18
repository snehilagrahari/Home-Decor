
import axios from "axios"



export const cartitemapi=(payload)=>{
    return axios.post(`http://localhost:8080/items`,payload)
}