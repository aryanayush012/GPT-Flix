import { React, useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLoggedInForm, setIsLoggedInForm] = useState(true);
  // const [emailMessage, setEmailMessage] = useState(null);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    // if (message === " ⨂ Please enter a valid email address or phone number.") {
    //   setEmailMessage(message);
    //   return;
    // }
    // if (
    //   message === " ⨂ Your password must contain between 4 and 60 characters."
    // ) {
    //   setPasswordMessage(message);
    //   return;
    // }
    setPasswordMessage(message);

    if (message) {
      return;
    }

    //else we have valid email and password
    // sign in /sign up here

    if (!isLoggedInForm) {
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
              // navigate("/browse");
            })
            .catch((error) => {
              setPasswordMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setPasswordMessage(errorCode + "-" + errorMessage);
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
          setPasswordMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const signFunction = () => {
    setIsLoggedInForm(!isLoggedInForm);
  };
  return (
    <div>
      <form
        className="bg-black bg-opacity-80 p-12 w-4/12 my-24 absolute mx-auto left-0 right-0 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isLoggedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoggedInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-900 bg-opacity-70 rounded-md border-red-500"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-900 bg-opacity-70 rounded-md border-red-500"
        />
        {/* <p className="text-sm text-red-600">{emailMessage}</p> */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-900 bg-opacity-70 rounded-md border-solid"
        />
        <p className="text-sm text-red-600">{passwordMessage}</p>
        <button
          type="submit"
          className="py-2 my-2 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isLoggedInForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="py-4 mx-24 cursor-pointer">Forgot Password?</h3>
        <div className="flex flex-row">
          <input type="checkbox" size={100} />
          <h3 className="mx-2">Remember me</h3>
        </div>
        {isLoggedInForm ? (
          <div className="flex flex-row my-4">
            <p className="text-gray-400">New to Netflix?</p>
            <h3
              className="font-bold mx-2 cursor-pointer"
              onClick={signFunction}
            >
              Sign up now
            </h3>
          </div>
        ) : (
          <div className="flex flex-row my-4">
            <p className="text-gray-400">Already a member ?</p>
            <h3
              className="font-bold mx-2 cursor-pointer"
              onClick={signFunction}
            >
              Sign In
            </h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
