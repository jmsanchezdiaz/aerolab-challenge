import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ProductPage from "../pages/ProductsPage/ProductPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/" component={ProductPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
