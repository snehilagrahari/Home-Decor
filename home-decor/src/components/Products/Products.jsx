import React, { useState, useEffect } from "react";
import Styles from "./Products.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getGridProducts } from "../../redux/products/products.action";
import { useSearchParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Error from "./Error";
import Filter from "./Filter";
import Sort from "./Sort";
import NoProductFound from "./NoProductFound";

const Products = () => {
  /**********    useState   ******************/
  const [searchParams, setSearchParams] = useSearchParams();

  /**********    url search params   ******************/
  const q = searchParams.get("q") || "";

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") || 1
  );
  const [productsPerPage, setProductsPerPage] = useState(15);

  const [sort, setSort] = useState(
    `${searchParams.get("_sort") || ""}&_order=${
      searchParams.get("_order") || ""
    }`
  );

  const [price_lte, setPrice_lte] = useState(
    searchParams.get("price_lte") || ""
  );

  const [price_gte, setPrice_gte] = useState(
    searchParams.get("price_gte") || ""
  );

  const [discount_lte, setDiscount_lte] = useState(
    searchParams.get("discount_lte") || ""
  );

  const [discount_gte, setDiscount_gte] = useState(
    searchParams.get("discount_gte") || ""
  );

  const [category, setcategory] = useState(searchParams.get("category") || "");

  const [timeToShip, setTimeToShip] = useState(
    searchParams.get("timeToShip") || ""
  );

  const [returnable, setReturnable] = useState(
    searchParams.get("returnable") || ""
  );

  const [cancellable, setCancellable] = useState(
    searchParams.get("cancellable") || ""
  );

  /**********    needed values to check for radio buttons for byDefault condition   ******************/
  let filterDefaultValues = {
    price: `${price_gte}*${price_lte}_price`,
    discount: `${discount_gte}*${discount_lte}_discount`,
    category: `${category}_category`,
    timeToShip: `${timeToShip}_timeToShip`,
    returnable: `${returnable}_returnable`,
    cancellable: `${cancellable}_cancellable`,
  };

  /**********    calling API on loads || reloads   ******************/
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getGridProducts(
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
      )
    );
  }, [
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
    sort,
  ]);

  /**********    redux store   ******************/
  const { loading, error, gridProducts, totalCount } = useSelector(
    (store) => store.products
  );

  const totalPage = Math.ceil(totalCount / productsPerPage);

  /**********    handling all functions   ******************/
  const paginate = (num) => {
    setCurrentPage(num);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleSortClose = () => {
    onClose();
  };

  const handleFilterClose = (value) => {
    if (value.includes("*")) {
      if (value.includes("_price")) {
        let res = new Array(2);
        let temp = value.split("*");
        res[0] = +temp[0];
        res[1] = +temp[1].split("_price")[0];
        setPrice_gte(res[0]);
        setPrice_lte(res[1]);
      } else if (value.includes("_discount")) {
        let res = new Array(2);
        let temp = value.split("*");
        res[0] = +temp[0];
        res[1] = +temp[1].split("_discount")[0];
        setDiscount_gte(res[0]);
        setDiscount_lte(res[1]);
      }
    } else if (value.includes("_category")) {
      let temp = value.split("_category");
      setcategory(temp[0]);
    } else if (value.includes("_timeToShip")) {
      let temp = value.split("_timeToShip");
      setTimeToShip(temp[0]);
    } else if (value.includes("_returnable")) {
      let temp = value.split("_returnable");
      setReturnable(temp[0]);
    } else if (value.includes("_cancellable")) {
      let temp = value.split("_cancellable");
      setCancellable(temp[0]);
    }
    onClose();
  };

  /*******  Code to hide the floating sort div when it hits the bottom  ***********/
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return gridProducts.length === 0 && loading === false ? (
    <NoProductFound />
  ) : (
    <div className={Styles.main}>
      {/***********  Filter here *************/}
      <div className={Styles.filter}>
        <Filter
          handleFilterClose={handleFilterClose}
          filterDefaultValues={filterDefaultValues}
        />
      </div>

      <div className={Styles.grid}>
        {/***********  Sort By here *************/}
        <div className={Styles.grid1}>
          <div className={Styles.grid1Sort}>
            <Sort
              sort={sort}
              handleSort={handleSort}
              handleSortClose={handleSortClose}
            />
          </div>
          <div className={Styles.grid1Showing}>
            Showing{" "}
            {`${1 + (currentPage * 15 - 15)}-${
              currentPage * 15
            } of ${totalCount}`}
          </div>
        </div>

        {/***********  All products here *************/}
        <div
          className={
            loading ? Styles.loading : error ? Styles.error : Styles.gridCard
          }
        >
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            gridProducts &&
            gridProducts.map((prod) => (
              <ProductsCard key={prod.id} data={prod} />
            ))
          )}
        </div>

        {/***********  Pagination here *************/}
        <div id="floating-div" className={Styles.gridPagination}>
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            paginate={paginate}
          />
        </div>
      </div>

      {/***********  customize soring when screen is mobile *************/}
      <div className={`${Styles.sortFloat} ${isVisible ? "" : Styles.hidden}`}>
        <Button ref={btnRef} color={"white"} bg={"#902735"} onClick={onOpen}>
          Customize search
        </Button>
        <Drawer
          isOpen={isOpen}
          placement={"right"}
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Apply sort and filter</DrawerHeader>

            <DrawerBody display={"flex"} flexDirection={"column"} gap={2}>
              <Filter
                handleFilterClose={handleFilterClose}
                filterDefaultValues={filterDefaultValues}
              />
              <div>
                <Sort
                  sort={sort}
                  handleSort={handleSort}
                  handleSortClose={handleSortClose}
                />
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Products;
