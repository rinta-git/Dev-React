import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidFields } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { FORM_BG_IMG } from "../utils/constant";
import { lang } from "../utils/languageConstant";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationMsg, setvalidationMsg] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const chosenLang = useSelector(store => store.config?.lang)

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
      <div className="fixed">
        <img src={FORM_BG_IMG} alt="background" className="h-screen w-screen object-cover" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black md:w-4/12 w-10/12  absolute md:p-12 p-8 my-36 mx-auto left-0 right-0 bg-opacity-90 rounded-md"
      >
        <h1 className="font-bold text-2xl md:py-4 py-0 text-white">
          {isSignIn ? lang[chosenLang].signIn : lang[chosenLang].signUp}
        </h1>
        {!isSignIn && (
          <input
            ref={username}
            type="text"
            placeholder={lang[chosenLang].fullName}
            className="my-4 p-4 w-full bg-gray-800 text-gray-400 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder={lang[chosenLang].userIdPlaceHolder}
          className="my-4 p-4 w-full bg-gray-800 text-gray-400 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder={lang[chosenLang].password}
          className="my-4 p-4 w-full bg-gray-800 text-gray-400 rounded-md"
        />
        <p className="text-red-500">{validationMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-md text-white"
          onClick={handleBtnSubmit}
        >
          {isSignIn ? lang[chosenLang].signIn : lang[chosenLang].signUp}
        </button>
        <p className="text-gray-400 text-sm md:text-base">
          {isSignIn ? lang[chosenLang].newToNetflix : "Already a member? "}
          <span
            className="font-normal text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? lang[chosenLang].signUp : lang[chosenLang].signIn}
          </span>
           {lang[chosenLang].now}.
        </p>
      </form>     
    </div>
  );
};

export default Login;
