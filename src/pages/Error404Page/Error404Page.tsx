import { Link } from "react-router-dom";
import "./Error404Page.scss";

const Error404Page = () => {
  return (
    <div className="error404">
      <h1 className="error404__title">Error 404</h1>
      <h3 className="error404__subtitle">
        The resource you were looking for was not found
      </h3>
      <Link className="error404__btn" to="/profile">
        Back to Profile
      </Link>
    </div>
  );
};

export default Error404Page;
