import React, { useContext } from "react";
import "./NavBar.scss";
import logo from "./logo.svg";
import coin from "./coin.svg";
import { ProductsContext } from "../../ProductsProvider/ProductsProvider";
import { Actions } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const { productsState, dispatch } = useContext(ProductsContext);

  const increaseBalance = () => {
    setTimeout(
      () =>
        dispatch({
          type: Actions.INCREASE,
        }),
      1000
    );
  };

  return (
    <nav className="navbar">
      <img src={logo} className="navbar__logo" alt="aerolab-logo" />
      <div className="navbar__userinfo">
        <Link className="navbar__userinfo-btn" to="/aerolabchallenge/profile">
          <h3 className="navbar__username">John Kite</h3>
        </Link>
        <button onClick={increaseBalance} className="navbar__user">
          <span className="navbar__money">{productsState?.userPoints}</span>
          <img className="navbar__coin" src={coin} alt="coin" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
