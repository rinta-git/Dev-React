import { HUNGRY_SPOT_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={HUNGRY_SPOT_LOGO} className="hungry-spot-logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-links-wrapper">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>
            Online: {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li>
            <button
              className="sign-in-btn"
              onClick={() => {
                btnText === "Login"
                  ? setBtnText("Logout")
                  : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
