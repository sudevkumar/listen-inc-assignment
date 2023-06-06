import React, { useEffect, useState } from "react";
import "./sign.css";
import { AiFillApple } from "react-icons/ai";

import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({});

  const handleCallbackResponse = (response) => {
    const userObject = jwt(response.credential);
    localStorage.setItem("list-user", JSON.stringify(userObject));
    setLoginUser(userObject);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "771509802200-niofeluu38ajcuni7j6sp4e8t5n7h1ra.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("google__id"), {
      theme: "outline",
      size: "medium",
    });
  }, []);

  // Check whether the user is sign in via google or not
  if (loginUser.name !== undefined) {
    navigate("/");
    alert("Welcome to Listed Inc.");
  }

  return (
    <div className="sign__in">
      <div className="sign__left">
        <span className="sign__left-board">Board.</span>
      </div>

      <div className="sign__right">
        <div className="sign__right_inner__div">
          <span className="sign__right-heading">Sign In</span>
          <br />
          <span className="sign__right-sub-heading">
            Sign in to your account
          </span>

          <div className="sign__right__btn-div">
            <div id="google__id"></div>
            <div>
              <button>
                <AiFillApple className="icon" color="gray" />
                Sign in with Apple
              </button>
            </div>
          </div>

          <div className="sign__right-form">
            <label>Email address</label>
            <input type="mail" name="" id="" />
            <label>Password</label>
            <input type="password" name="" id="" />
            <span className="forget__password">Forget password?</span>
            <button>Sign In</button>
          </div>
          <span className="no__account">
            Don't have have an account? <span>Register here</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sign;
