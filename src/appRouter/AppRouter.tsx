import NavBar from "../components/NavBar/NavBar";
import Error404Page from "../pages/Error404Page/Error404Page";
import ProductPage from "../pages/ProductsPage/ProductPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/aerolab-challenge" component={ProductPage} />
        <Route path="*" component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
