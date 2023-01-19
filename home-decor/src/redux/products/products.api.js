import axios from "axios";

export const getGridProductsAPI = async (
  currentPage,
  productsPerPage,
  sort
) => {
  const responce = await axios.get(
    `https://mock-server-ge69.onrender.com/api/Products?_page=${currentPage}&_limit=${productsPerPage}&${sort}`
  );
  
  return responce;
};

export const getTotalProductsAPI = async () => {
  const response = await axios.get(
    "https://mock-server-ge69.onrender.com/api/Products"
  );
  return response.data;
};
