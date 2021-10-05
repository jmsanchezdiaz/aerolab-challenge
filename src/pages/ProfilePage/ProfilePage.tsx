import { Link } from "react-router-dom";
import RedeemList from "../../components/RedeemList/RedeemList";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-page__bar">
        <Link className="profile-page__back-button" to="/">
          Back
        </Link>
        <h3 className="profile-page__label">Redeem Products</h3>
      </div>
      <RedeemList />
    </div>
  );
};

export default ProfilePage;
