import axios from 'axios'

export const getOrdersApi = (id)=>{
    return axios.get(`https://mock-server-ge69.onrender.com/api/Orders?userid=${id}`);
}

export const placeOrderApi = (data)=>{
    return axios.post('https://mock-server-ge69.onrender.com/api/Orders',data);
}

export const deleteOrderApi = (id)=>{
    return axios.delete(`https://mock-server-ge69.onrender.com/api/Orders/${id}`);
}

export const updateOrderApi = (id,status)=>{
    let data = {
        orderStatus : status
    }
    return axios.patch(`https://mock-server-ge69.onrender.com/api/Orders/${id}`,data);
}