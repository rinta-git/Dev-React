import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidFields } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { FORM_BG_IMG } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationMsg, setvalidationMsg] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnSubmit = () => {
    //validate fields
    let message = "";

    message = checkValidFields(email.current.value, password.current.value);
    setvalidationMsg(message);
    if (message) return;
    //do the signin/signup if there is valid credentials
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser; //user is not yet updated, auth has all the value
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setvalidationMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalidationMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalidationMsg("Oops! user not found");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={FORM_BG_IMG} alt="background" />
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
            ref={username}
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
