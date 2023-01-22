import axios from "axios";

export const getGridProductsAPI = async (
  currentPage,
  productsPerPage,
  q,
  price_lte,
  price_gte,
  discount_lte,
  discount_gte,
  category,
  timeToShip,
  returnable,
  cancellable,
  sort
) => {
  const URL = `https://mock-server-ge69.onrender.com/api/Products${
    q !== "" ? `?q=${q}` : "?q="
  }${category !== "" ? `&category=${category}` : ""}${
    sort !== "" ? `&_sort=${sort}` : ""
  }${currentPage !== "" ? `&_page=${currentPage}` : ""}${
    productsPerPage !== "" ? `&_limit=${productsPerPage}` : ""
  }${price_gte !== "" ? `&price_gte=${price_gte}` : ""}${
    price_lte !== "" ? `&price_lte=${price_lte}` : ""
  }${discount_gte !== "" ? `&discount_gte=${discount_gte}` : ""}${
    discount_lte !== "" ? `&discount_lte=${discount_lte}` : ""
  }${timeToShip !== "" ? `&timeToShip=${timeToShip}` : ""}${
    returnable !== "" ? `&returnable=${returnable}` : ""
  }${cancellable !== "" ? `&cancellable=${cancellable}` : ""}`;

  const responce = await axios.get(URL);

  return responce;
};
