// import React from "react";
// import Header from "./Header";
// import LoginForm from "./LoginForm";

// const Login = () => {
//   return (
//     <div>
//       <Header />
//       <div className="absolute h-auto max-w-full bg-cover bg-center bg-gradient-to-b from-black">
//         <img
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
//           alt="logo"
//         />
//       </div>
//       <LoginForm />
//       {/* <div className="absolute">
//       </div> */}
//     </div>
//   );
// };

// export default Login;

import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
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
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-auto object-cover  max-w-full bg-cover bg-center bg-gradient-to-b from-black"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 p-12 w-4/12 my-24 absolute mx-auto left-0 right-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-900 bg-opacity-70 rounded-md border-red-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-900 bg-opacity-70 rounded-md border-red-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-900 bg-opacity-70 rounded-md border-red-500"
        />
        <p className="text-sm text-red-600">{errorMessage}</p>
        <button
          className="py-2 my-2 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="py-4 mx-24 cursor-pointer">Forgot Password?</h3>
        <div className="flex flex-row">
          <input type="checkbox" size={100} />
          <h3 className="mx-2">Remember me</h3>
        </div>
        {isSignInForm ? (
          <div className="flex flex-row my-4">
            <p className="text-gray-400">New to Netflix?</p>
            <h3
              className="font-bold mx-2 cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now
            </h3>
          </div>
        ) : (
          <div className="flex flex-row my-4">
            <p className="text-gray-400">Already a member ?</p>
            <h3
              className="font-bold mx-2 cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In
            </h3>
          </div>
        )}
      </form>
    </div>
  );
};
export default Login;
