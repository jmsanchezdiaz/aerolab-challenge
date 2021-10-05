import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Error404Page from "../pages/Error404Page/Error404Page";
import ProductPage from "../pages/ProductsPage/ProductPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const PublicRoutes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/aerolabchallenge/profile" component={ProfilePage} />
        <Route exact path="/aerolabchallenge/" component={ProductPage} />
        <Route component={Error404Page} />
      </Switch>
    </>
  );
};

export default PublicRoutes;
