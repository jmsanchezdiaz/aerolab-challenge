import { Route, BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/aerolabchallenge" component={PublicRoutes} />
    </Router>
  );
};

export default AppRouter;
