import { Product } from "../../interfaces/interfaces";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.scss";

interface ProductListProps {
  filtered: Product[];
}

const ProductList = ({ filtered }: ProductListProps) => {
  return (
    <div className="products__list">
      {filtered?.map((product: Product) => {
        return <ProductItem key={product["_id"]} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
