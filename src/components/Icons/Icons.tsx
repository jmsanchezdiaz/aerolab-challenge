import BuyWhiteIcon from "./buy-white.svg";
import BuyBlueIcon from "./buy-blue.svg";

const Icons = () => {
  return (
    <>
      <img
        className="product-item__buy-icon--white product-item__buy-icon"
        src={BuyWhiteIcon}
        alt="buy-white-icon"
      />
      <img
        className="product-item__buy-icon--blue product-item__buy-icon"
        src={BuyBlueIcon}
        alt="buy-blue-icon"
      />
    </>
  );
};

export default Icons;
