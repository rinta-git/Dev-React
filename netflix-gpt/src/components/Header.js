import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearch } from "../utils/GptSlice";
import { addLanguage } from "../utils/configSlice";
import { lang } from "../utils/languageConstant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const chosenLang = useSelector((store) => store.config?.lang);
  const isGptPage = useSelector(store => store.gpt?.gptSearchOption)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTOption = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguage = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser ");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribing the eventlistener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="Netflix" className="w-44" />
      {user && (
        <div className="flex p-4">
          <select
            className="p2 m-3 bg-gray-900 text-white border-none outline-none"
            onChange={handleLanguage}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="bg-purple-600 text-white rounded-md pl-3 pr-3 m-3"
            onClick={handleGPTOption}
          >
            {isGptPage ? lang[chosenLang].gptSearchBtnText :  lang[chosenLang].goHome}
          </button>
          <button
            className=" text-white font-bold rounded-md p-2"
            onClick={handleSignOut}
          >
            {lang[chosenLang].signOutText}
          </button>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-red-600 rounded-full dark:bg-white-600 ml-3 mr-3">
            <span className="font-medium text-white dark:text-white-300">
              {user?.displayName?.slice(0, 1).toUpperCase() +
                user?.displayName?.slice(-1).toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
