import CoinIcon from "./coin.svg";
import { Product, Actions } from "../../interfaces/interfaces";
import "./ProductItem.scss";
import { useContext, useState } from "react";
import { ProductsContext } from "../../ProductsProvider/ProductsProvider";
import Icons from "../Icons/Icons";
import Loader from "../Loader/Loader";
import BuyButton from "../BuyButton/BuyButton";
import { useMediaQuery } from "../../customHooks/useMediaQuery";

interface ProductProps {
  product: Product;
}

const ProductItem = ({ product }: ProductProps) => {
  //Obtenemos el estado desde el context y creamos el estado wasBought
  const { productsState, dispatch } = useContext(ProductsContext);
  const [wasBought, setWasBought] = useState<boolean>(false);
  const { isMatchWithQuery } = useMediaQuery({ minWidth: 768 });

  //Destructuramos product y declaramos los puntos restantes y creamos la variable isAfordable para saber si el producto es costeable.
  const { name, category, cost, img } = product;
  const pointsRemaining = productsState.userPoints - cost;
  const isAfordable = pointsRemaining >= 0;

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
            {wasBought ? (
              <Loader />
            ) : (
              <BuyButton
                handleReedem={handleReedem}
                isMobileView={isMatchWithQuery}
              />
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
