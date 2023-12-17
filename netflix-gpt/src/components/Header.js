import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
        className="w-44"
      />
      {user && (
        <div className="flex p-4">
          <button
            className=" text-white font-bold rounded-md p-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-red-600 rounded-full dark:bg-white-600 ml-3 mr-3">
            <span className="font-medium text-white dark:text-white-300">
              {user?.displayName?.slice(0,1).toUpperCase() +
                user?.displayName?.slice(-1).toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
