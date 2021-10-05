import AppRouter from "./appRouter/AppRouter";
import ProductsProvider from "./ProductsProvider/ProductsProvider";
import "./index.scss";

function App() {
  return (
    <ProductsProvider>
      <AppRouter />
    </ProductsProvider>
  );
}

export default App;
