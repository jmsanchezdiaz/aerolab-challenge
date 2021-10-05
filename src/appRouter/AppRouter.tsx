import { Route, Switch } from "wouter";
import NavBar from "../components/NavBar/NavBar";
import Error404Page from "../pages/Error404Page/Error404Page";
import ProductPage from "../pages/ProductsPage/ProductPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={ProductPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={Error404Page} />
      </Switch>
    </div>
  );
};

export default AppRouter;
