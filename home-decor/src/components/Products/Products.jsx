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
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const [sort, setSort] = useState("");

  /**********    url search params   ******************/
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  /**********    calling API on loads || reloads   ******************/
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGridProducts(currentPage, productsPerPage, sort, q, category));
  }, [currentPage, sort, q, category]);

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

  const handleSortFilterClose = () => {
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
        <Filter handleSortFilterClose={handleSortFilterClose} />
      </div>

      <div className={Styles.grid}>
        {/***********  Sort By here *************/}
        <div className={Styles.grid1}>
          <div className={Styles.grid1Sort}>
            <Sort
              sort={sort}
              handleSort={handleSort}
              handleSortFilterClose={handleSortFilterClose}
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
            gridProducts.map((prod) => <ProductsCard key={prod.id} {...prod} />)
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
              <Filter />
              <div>
                <Sort
                  sort={sort}
                  handleSort={handleSort}
                  handleSortFilterClose={handleSortFilterClose}
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
