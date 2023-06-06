import React, { useState } from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar({ handleClick, click, setClick }) {
  const navigate = useNavigate();
  const lisetdUser = JSON.parse(localStorage.getItem("list-user"));
  


  const handleLogOut = () => {
    localStorage.removeItem("list-user");
    navigate("/signup");
    alert("Logout Successful");
    setClick(false);
  };

  const handleSignIn = () => {
    navigate("/signup");
    setClick(false);
  };

  return (
    <>
      <div className="navbar">
        <span className="navbar__heading">Dashboard</span>
        <div className="left__side__navbar">
          <div className="input__navbar">
            <input type="text" name="" id="" placeholder="Search..." />
            <AiOutlineSearch className="input__icons" />
          </div>
          <AiOutlineBell className="input__bell__icons" />

          <div className="navbar__image" onClick={handleClick}>
            <img
              src={
                lisetdUser !== null
                  ? lisetdUser.picture
                  : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      {click === true && lisetdUser !== null ? (
        <>
          <div className="log_out">
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </>
      ) : click === true && lisetdUser === null ? (
        <div className="log_out">
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
