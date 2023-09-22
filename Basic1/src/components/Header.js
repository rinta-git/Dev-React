import { HUNGRY_SPOT_LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

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
            <Link to="/cart">
              Cart
              {cartItems.length >= 1 && (
                <span data-testid="cartItems" className="px-1 mx-1 bg-green-600 text-white">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="mx-3">Online: {onlineStatus ? "🟢" : "🔴"}</li>
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
          <li className="font-bold mx-3">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
