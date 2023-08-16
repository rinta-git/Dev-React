import { HUNGRY_SPOT_LOGO } from "../utils/constants";
const Header = () => (
  <div className="header-wrapper">
    <div className="logo">
      <img src={HUNGRY_SPOT_LOGO} className="hungry-spot-logo" />
    </div>
    <div className="nav-items">
      <ul className="nav-links-wrapper">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
