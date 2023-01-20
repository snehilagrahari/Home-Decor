import axios from "axios";

export const getGridProductsAPI = async (
  currentPage,
  productsPerPage,
  sort,
  q,
  category
) => {
  const responce = await axios.get(
    `https://mock-server-ge69.onrender.com/api/Products?${sort}&_page=${currentPage}&_limit=${productsPerPage}${
      q !== "" ? `&q=${q}` : ""
    }${category !== "" ? `&category=${category}` : ""}`
  );

  return responce;
};
