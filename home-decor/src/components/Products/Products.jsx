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
import { getCartItems } from "../../redux/Cart/cart.actions";
import { useSearchParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Error from "./Error";
import Filter from "./Filter";
import Sort from "./Sort";
import NoProductFound from "./NoProductFound";
import { useToast } from "@chakra-ui/react";

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
    /**********    page will always loads at top position   ******************/
    window.scrollTo(0, 0);

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
      ),
      getCartItems()
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
    dispatch,
  ]);

  /**********    redux store   ******************/
  const { loading, error, gridProducts, totalCount } = useSelector(
    (store) => store.products
  );

  const cart = useSelector((store) => store.cart.datas);

  const totalPage = Math.ceil(totalCount / productsPerPage);

  /**********    handling all functions check below   ******************/

  /**********    this function change pages and URL   ******************/
  const paginate = (num) => {
    setCurrentPage(num);

    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      if (!newSearchParams.has("q")) {
        newSearchParams.append("q", "");
      }

      if (newSearchParams.has("_page")) {
        newSearchParams.set("_page", num);
      } else {
        newSearchParams.append("_page", num);
      }

      if (!newSearchParams.has("_limit")) {
        newSearchParams.append("_limit", 15);
      }

      return newSearchParams;
    });
  };

  /**********    this function impliment sorting and changes URL   ******************/
  const handleSort = (value, sort, order) => {
    setSort(value);

    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      if (!newSearchParams.has("q")) {
        newSearchParams.append("q", "");
      }

      if (newSearchParams.has("_page")) {
        setCurrentPage(1);
        newSearchParams.set("_page", 1);
      } else {
        setCurrentPage(1);
        newSearchParams.append("_page", 1);
      }

      if (!newSearchParams.has("_limit")) {
        newSearchParams.append("_limit", 15);
      }

      if (newSearchParams.has("_sort")) {
        newSearchParams.set("_sort", sort);
      } else {
        newSearchParams.append("_sort", sort);
      }

      if (newSearchParams.has("_order")) {
        newSearchParams.set("_order", order);
      } else {
        newSearchParams.append("_order", order);
      }

      return newSearchParams;
    });
  };

  /**********    state for the drawer   ******************/
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  /**********    this close the drawer when cliked on sorting buttons in mobile view  ******************/
  const handleSortClose = () => {
    onClose();
  };

  /**********    this close the drawer when cliked on filters radio buttons in mobile view  ******************/
  const handleFilterClose = (value) => {
    if (value.includes("*")) {
      if (value.includes("_price")) {
        let temp = value.split("*");
        let price_gte = +temp[0];
        let price_lte = +temp[1].split("_price")[0];
        setPrice_gte(price_gte);
        setPrice_lte(price_lte);

        setSearchParams((prevSearchParams) => {
          const newSearchParams = new URLSearchParams(prevSearchParams);
          if (!newSearchParams.has("q")) {
            newSearchParams.append("q", "");
          }

          if (newSearchParams.has("_page")) {
            setCurrentPage(1);
            newSearchParams.set("_page", 1);
          } else {
            setCurrentPage(1);
            newSearchParams.append("_page", 1);
          }

          if (!newSearchParams.has("_limit")) {
            newSearchParams.append("_limit", 15);
          }

          if (newSearchParams.has("price_lte")) {
            newSearchParams.set("price_lte", price_lte);
          } else {
            newSearchParams.append("price_lte", price_lte);
          }

          if (newSearchParams.has("price_gte")) {
            newSearchParams.set("price_gte", price_gte);
          } else {
            newSearchParams.append("price_gte", price_gte);
          }

          return newSearchParams;
        });
      }

      if (value.includes("_discount")) {
        let temp = value.split("*");
        let discount_lte = +temp[1].split("_discount")[0];
        let discount_gte = +temp[0];
        setDiscount_gte(discount_gte);
        setDiscount_lte(discount_lte);

        setSearchParams((prevSearchParams) => {
          const newSearchParams = new URLSearchParams(prevSearchParams);
          if (!newSearchParams.has("q")) {
            newSearchParams.append("q", "");
          }

          if (newSearchParams.has("_page")) {
            setCurrentPage(1);
            newSearchParams.set("_page", 1);
          } else {
            setCurrentPage(1);
            newSearchParams.append("_page", 1);
          }

          if (!newSearchParams.has("_limit")) {
            newSearchParams.append("_limit", 15);
          }

          if (newSearchParams.has("discount_lte")) {
            newSearchParams.set("discount_lte", discount_lte);
          } else {
            newSearchParams.append("discount_lte", discount_lte);
          }

          if (newSearchParams.has("discount_gte")) {
            newSearchParams.set("discount_gte", discount_gte);
          } else {
            newSearchParams.append("discount_gte", discount_gte);
          }

          return newSearchParams;
        });
      }
    }

    if (value.includes("_category")) {
      let category = value.split("_category")[0];
      setcategory(category);

      setSearchParams((prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        if (!newSearchParams.has("q")) {
          newSearchParams.append("q", "");
        }

        if (newSearchParams.has("_page")) {
          setCurrentPage(1);
          newSearchParams.set("_page", 1);
        } else {
          setCurrentPage(1);
          newSearchParams.append("_page", 1);
        }

        if (!newSearchParams.has("_limit")) {
          newSearchParams.append("_limit", 15);
        }

        if (newSearchParams.has("category")) {
          newSearchParams.set("category", category);
        } else {
          newSearchParams.append("category", category);
        }

        return newSearchParams;
      });
    }

    if (value.includes("_timeToShip")) {
      let timeToShip = value.split("_timeToShip")[0];
      setTimeToShip(timeToShip);

      setSearchParams((prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        if (!newSearchParams.has("q")) {
          newSearchParams.append("q", "");
        }

        if (newSearchParams.has("_page")) {
          setCurrentPage(1);
          newSearchParams.set("_page", 1);
        } else {
          setCurrentPage(1);
          newSearchParams.append("_page", 1);
        }

        if (!newSearchParams.has("_limit")) {
          newSearchParams.append("_limit", 15);
        }

        if (newSearchParams.has("timeToShip")) {
          newSearchParams.set("timeToShip", timeToShip);
        } else {
          newSearchParams.append("timeToShip", timeToShip);
        }

        return newSearchParams;
      });
    }

    if (value.includes("_returnable")) {
      let returnable = value.split("_returnable")[0];
      setReturnable(returnable);

      setSearchParams((prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        if (!newSearchParams.has("q")) {
          newSearchParams.append("q", "");
        }

        if (newSearchParams.has("_page")) {
          setCurrentPage(1);
          newSearchParams.set("_page", 1);
        } else {
          setCurrentPage(1);
          newSearchParams.append("_page", 1);
        }

        if (!newSearchParams.has("_limit")) {
          newSearchParams.append("_limit", 15);
        }

        if (newSearchParams.has("returnable")) {
          newSearchParams.set("returnable", returnable);
        } else {
          newSearchParams.append("returnable", returnable);
        }

        return newSearchParams;
      });
    }

    if (value.includes("_cancellable")) {
      let cancellable = value.split("_cancellable")[0];
      setCancellable(cancellable);

      setSearchParams((prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        if (!newSearchParams.has("q")) {
          newSearchParams.append("q", "");
        }

        if (newSearchParams.has("_page")) {
          setCurrentPage(1);
          newSearchParams.set("_page", 1);
        } else {
          setCurrentPage(1);
          newSearchParams.append("_page", 1);
        }

        if (!newSearchParams.has("_limit")) {
          newSearchParams.append("_limit", 15);
        }

        if (newSearchParams.has("cancellable")) {
          newSearchParams.set("cancellable", cancellable);
        } else {
          newSearchParams.append("cancellable", cancellable);
        }

        return newSearchParams;
      });
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

  const toast = useToast();

  const handleToast = (cond) => {
    if (cond === "success") {
      toast({
        position: "top",
        title: "Added to cart",
        description: "Item successfully added to cart!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "Already in cart",
        description: "This product is already present in your cart.",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
    }
  };

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
              <ProductsCard
                key={prod.id}
                data={prod}
                handleToast={handleToast}
                cart={cart}
              />
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

      {/***********  customize sorting when screen is mobile *************/}
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
