import React from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
  const { picture } = JSON.parse(localStorage.getItem("list-user"));

  return (
    <div className="navbar">
      <span className="navbar__heading">Dashboard</span>
      <div className="left__side__navbar">
        <div className="input__navbar">
          <input type="text" name="" id="" placeholder="Search..." />
          <AiOutlineSearch className="input__icons" />
        </div>
        <AiOutlineBell className="input__bell__icons" />

        <div className="navbar__image">
          <img
            src={
              picture !== undefined
                ? picture
                : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
