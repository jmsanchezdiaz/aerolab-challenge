interface ButtonProps {
  handleReedem: () => void;
  isMobileView: boolean;
}

const BuyButton = ({ handleReedem, isMobileView }: ButtonProps) => {
  return (
    <>
      {isMobileView ? (
        <button
          onDoubleClick={handleReedem}
          className="product-item__redeem-btn"
        >
          Redeem Now
        </button>
      ) : (
        <button onClick={handleReedem} className="product-item__redeem-btn">
          Redeem Now
        </button>
      )}
    </>
  );
};

export default BuyButton;
