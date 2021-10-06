import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => console.log(user))
      .catch((err) => alert(err.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => console.log(user))
      .catch((err) => alert(err));
  };
  return (
    <div className="signUpScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupscreengrey">New to Netflix? </span>{" "}
          <span className="signupscreen_link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
