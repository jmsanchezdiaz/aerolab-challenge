import { Product } from "../../interfaces/interfaces";
import "../ProductItem/ProductItem.scss";

interface ReedemProps {
  redeemProduct: Product;
}

const RedeemProduct = ({ redeemProduct }: ReedemProps) => {
  const { name, category, img, date, quantity } = redeemProduct;
  return (
    <div className="product-item">
      <div className="product-item__info">
        <img src={img.url} alt={name} />
        <div className="product-item__text">
          <span>{category}</span>
          <h4>{name}</h4>
          <p>Date : {date}</p>
          <p>Quantity : {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default RedeemProduct;
