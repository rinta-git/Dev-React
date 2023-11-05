import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidFields } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationMsg, setvalidationMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnSubmit = () => {
    //validate fields
    let message = "";
    
    message = checkValidFields(email.current.value, password.current.value);
    setvalidationMsg(message);
    //do the login
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-4/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-opacity-90 rounded-md"
      >
        <h1 className="font-bold text-2xl py-4 text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-800 text-gray-400 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="my-4 p-4 w-full bg-gray-800 text-gray-400 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-800 text-gray-400 rounded-md"
        />
        <p className="text-red-500">{validationMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-md text-white"
          onClick={handleBtnSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400">
          {isSignIn ? "New to Netflix? " : "Already a member? "}
          <span
            className="font-normal text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign up " : "Sign in "}
          </span>
          now.
        </p>
      </form>
    </div>
  );
};

export default Login;
