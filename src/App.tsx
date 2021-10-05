import AppRouter from "./appRouter/AppRouter";
import ProductsProvider from "./ProductsProvider/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <AppRouter />
    </ProductsProvider>
  );
}

export default App;
