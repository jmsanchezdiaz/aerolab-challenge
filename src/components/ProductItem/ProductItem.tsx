import CoinIcon from "./coin.svg";
import { Product, Actions } from "../../interfaces/interfaces";
import "./ProductItem.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsProvider/ProductsProvider";
import Icons from "../Icons/Icons";
import Loader from "../Loader/Loader";

interface ProductProps {
  product: Product;
}

const ProductItem = ({ product }: ProductProps) => {
  //Obtenemos el estado desde el context y creamos el estado wasBought
  const { productsState, dispatch } = useContext(ProductsContext);
  const [wasBought, setWasBought] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  //Destructuramos product y declaramos los puntos restantes y creamos la variable isAfordable para saber si el producto es costeable.
  const { name, category, cost, img } = product;
  const pointsRemaining = productsState.userPoints - cost;
  const isAfordable = pointsRemaining >= 0;

  useEffect(() => {
    const handleResizeComponents = (e: any) => {
      if (window.innerWidth < 768) setIsMobileView(true);
      else setIsMobileView(false);
    };
    window.addEventListener("resize", handleResizeComponents);
    return () => {
      window.removeEventListener("resize", handleResizeComponents);
    };
  }, []);

  const handleReedem = () => {
    setWasBought(true);
    setTimeout(() => {
      dispatch({
        type: Actions.BUY,
        payload: {
          ...product,
          date: new Date().toDateString(),
        },
      });
      setWasBought(false);
    }, 1000);
  };

  return (
    <div className="product-item">
      <div className="product-item__info">
        <img src={img.url} alt={name} />
        <div className="product-item__text">
          <span>{category}</span>
          <h4>{name}</h4>
        </div>
      </div>

      {isAfordable ? (
        <>
          <Icons />
          <div className="product-item__redeem-info">
            <div className="product-item__redeem-cost">
              <span>{cost}</span>
              <img src={CoinIcon} alt="coin-icon" />
            </div>
            {!isMobileView ? (
              <button
                onClick={handleReedem}
                className="product-item__redeem-btn"
              >
                {wasBought ? <Loader /> : "Redeem Now"}
              </button>
            ) : (
              <button
                onDoubleClick={handleReedem}
                className="product-item__redeem-btn"
              >
                {wasBought ? <Loader /> : "Redeem Now"}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="product-item__needed-points">
          <span className="product-item__needed-points__label">
            You need {Math.abs(pointsRemaining)}
          </span>
          <img src={CoinIcon} alt="coin-icon" />
        </div>
      )}
    </div>
  );
};

export default ProductItem;
