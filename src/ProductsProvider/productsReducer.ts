import { ActionType, Actions, ProductsState } from "../interfaces/interfaces";

export const productsReducer = (state: ProductsState, action: ActionType) => {
  switch (action.type) {
    case Actions.BUY:
      const productRedeem = state.redeemProducts.find(
        (product) => product["_id"] === action.payload["_id"]
      );
      const staticState = {
        ...state,
        userPoints: state.userPoints - action.payload.cost,
      };
      if (productRedeem) {
        return {
          ...staticState,
          redeemProducts: [
            ...state.redeemProducts.map((product) => {
              if (product["_id"] === productRedeem["_id"]) {
                return {
                  ...product,
                  quantity: product.quantity + 1,
                };
              }
              return product;
            }),
          ],
        };
      }
      return {
        ...staticState,
        redeemProducts: [
          ...state.redeemProducts,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    case Actions.INCREASE:
      return {
        ...state,
        userPoints: state.userPoints + 2500,
      };
    default:
      return state;
  }
};
