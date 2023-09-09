import { HUNGRY_SPOT_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  

  return (
    <div className="flex justify-between shadow-lg">
      <div className="w-36">
        <img src={HUNGRY_SPOT_LOGO} className="hungry-spot-logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="mx-3"> 
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="mx-3">
            <Link to="/">Cart</Link>
          </li>
          <li className="mx-3">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="mx-3">
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
