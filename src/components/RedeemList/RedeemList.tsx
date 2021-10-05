import { useContext } from "react";
import { ProductsContext } from "../../ProductsProvider/ProductsProvider";
import RedeemProduct from "../RedeemProduct/RedeemProduct";
import "./RedeemList.scss";
import LeftArrow from "./arrow-left.svg";
import RightArrow from "./arrow-right.svg";
import { usePagination } from "../../customHooks/usePagination";

const RedeemList = () => {
  const { productsState } = useContext(ProductsContext);
  const { filtered, goPrevPage, goNextPage, amountOfElements } = usePagination(
    productsState.redeemProducts,
    12
  );
  return (
    <>
      <div className="profile-page__controls">
        <button onClick={goPrevPage} className="profile-page__button">
          <img src={LeftArrow} alt="previous-button" />
        </button>
        <span>
          {amountOfElements} of {productsState.redeemProducts.length} Products
        </span>
        <button onClick={goNextPage} className="profile-page__button">
          <img src={RightArrow} alt="next-button" />
        </button>
      </div>
      <div className="profile-page__list">
        {filtered.map((redeemProduct) => {
          return (
            <RedeemProduct
              key={redeemProduct["_id"]}
              redeemProduct={redeemProduct}
            />
          );
        })}
      </div>
    </>
  );
};

export default RedeemList;
