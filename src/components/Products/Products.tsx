import { useEffect, useRef, useState } from "react";
import { usePagination } from "../../customHooks/usePagination";
import { getProducts } from "../../helpers/getProducts";
import {
  orderProductsByLowestPrice,
  orderProductsByHighestPrice,
} from "../../helpers/sortFunctions";
import { Product } from "../../interfaces/interfaces";
import ProductList from "../ProductsList/ProductList";
import ArrowLeft from "./arrow-left.svg";
import ArrowRight from "./arrow-right.svg";
import "./Products.scss";

const Products: React.FC = () => {
  const isMount = useRef(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [mostRecent, setMostRecent] = useState<Product[]>([]);
  const { filtered, amountOfElements, pageNumber, goNextPage, goPrevPage } =
    usePagination(products, 16);

  useEffect(() => {
    getProducts().then((response) => {
      if (isMount.current) {
        setProducts(response);
        setMostRecent(response);
      }
    });
    return () => {
      isMount.current = false;
    };
  }, [products]);

  const orderByLowestPrice = () => {
    setProducts([...orderProductsByLowestPrice(products)]);
  };

  const orderByHighestPrice = () => {
    setProducts([...orderProductsByHighestPrice(products)]);
  };

  const orderByRecent = () => {
    if (mostRecent.length > 0) setProducts([...mostRecent]);
  };

  return (
    <div className="products">
      {/* Filter Bar */}
      <div className="products__handlers">
        <div className="products__sort">
          <span className="products__amount">
            {amountOfElements} of {products?.length} products
          </span>

          <div className="products__sort-buttons">
            <span className="products__sort-buttons-label">Sort by: </span>
            <div className="products__sort-buttons-container">
              <button
                onClick={orderByRecent}
                className="products__most-recent btn"
              >
                Most Recent
              </button>
              <button
                onClick={orderByLowestPrice}
                className="products__lowest-price btn"
              >
                Lowest Price
              </button>
              <button
                onClick={orderByHighestPrice}
                className="products__highest-price btn"
              >
                Highest Price
              </button>
            </div>
          </div>
        </div>
        <div className="products__pagination-controls">
          {pageNumber > 1 && (
            <button onClick={goPrevPage} className="products__left-arrow">
              <img src={ArrowLeft} alt="left-arrow-icoin" />
            </button>
          )}
          {amountOfElements < products.length && (
            <button onClick={goNextPage} className="products__right-arrow">
              <img src={ArrowRight} alt="right-arrow-icoin" />
            </button>
          )}
        </div>
      </div>

      {/* Products List */}
      <ProductList filtered={filtered} />
      <footer className="footer">
        {amountOfElements} of {products?.length} products
      </footer>
    </div>
  );
};

export default Products;
