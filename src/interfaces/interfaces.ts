import React from "react";

export interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface Product {
  _id: string;
  category: string;
  name: string;
  cost: number;
  img: {
    url: string;
    hdUrl: string;
  };
  quantity: number;
  date: string;
}

export type ProductsState = {
  redeemProducts: Product[];
  userPoints: number;
};

export interface ProductsContextType {
  productsState: ProductsState;
  dispatch: React.Dispatch<ActionType>;
}

export enum Actions {
  BUY = "[BUY PRODUCT]",
  INCREASE = "[INCREASE BALANCE]",
}

export type ActionType =
  | {
      type: Actions.BUY;
      payload: Product;
    }
  | {
      type: Actions.INCREASE;
    };
