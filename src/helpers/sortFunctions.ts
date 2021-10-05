import { Product } from "../interfaces/interfaces";

export const orderProductsByLowestPrice = (products: Product[]): Product[] => {
  const productsArr = [...products];
  return productsArr.sort((productA, productB) => {
    return productA.cost - productB.cost;
  });
};

export const orderProductsByHighestPrice = (products: Product[]): Product[] => {
  const productsArr = [...products];
  return productsArr.sort((productA, productB) => {
    return productB.cost - productA.cost;
  });
};
