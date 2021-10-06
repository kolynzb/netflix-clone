import "./LoginScreen.css";
import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://pngpress.com/wp-content/uploads/2020/04/Netflix-logo.png"
          alt=""
        />

        <button className="LoginScreen_btn">Sign Up</button>

        <div className="loginScreen_gradient"></div>
        <div className="loginScreen_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere.Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your to create or restart your membership
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="loginScreen_getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
