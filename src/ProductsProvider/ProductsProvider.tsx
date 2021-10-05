import { createContext, useEffect, useReducer } from "react";
import {
  ProductsState,
  ProductsContextType,
  ProviderProps,
} from "../interfaces/interfaces";
import { productsReducer } from "./productsReducer";

export const ProductsContext = createContext({} as ProductsContextType);

const initialState: ProductsState = {
  redeemProducts:
    JSON.parse(localStorage.getItem("redeemProducts") as string) || [],
  userPoints: JSON.parse(localStorage.getItem("userPoints") as string) || 6500,
};

const ProductsProvider = ({ children }: ProviderProps) => {
  const [productsState, dispatch] = useReducer(productsReducer, initialState);

  const data = {
    productsState,
    dispatch,
  };

  useEffect(() => {
    localStorage.setItem("userPoints", productsState.userPoints.toString());
    localStorage.setItem(
      "redeemProducts",
      JSON.stringify(productsState.redeemProducts)
    );
  }, [productsState]);

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
