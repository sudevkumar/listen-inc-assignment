import React, { useState } from "react";
import "./sidebar.css";
import { BsTags } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="hamberger" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={
            !menuOpen
              ? "https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
              : "https://w7.pngwing.com/pngs/4/1018/png-transparent-computer-icons-share-icon-hamburger-button-crossed-logo-share-icon-symbol.png"
          }
          alt="Bard"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      {menuOpen ? (
        <>
          <div className="hamberger_menu" onClick={() => setMenuOpen(false)}>
            <div
              className="sub__home__left__top_dashboard ham"
              onClick={() => setMenuOpen(false)}
            >
              <VscDashboard className="icon_home" />
              Dashboard
            </div>
            <div
              className="sub__home__left__top_transaction ham"
              onClick={() => setMenuOpen(false)}
            >
              <BsTags className="icon_home" /> Transaction
            </div>
            <div className="sub__home__left__top_schedules ham">
              <AiOutlineSchedule className="icon_home" />
              Schedules
            </div>
            <div className="sub__home__left__top_user ham">
              <BiUserCircle className="icon_home" />
              User
            </div>
            <div className="sub__home__left__top_settings ham">
              <FiSettings className="icon_home" />
              Settings
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="sub__home__left">
        <div className="sub__home__left__top">
          <span>Board.</span>
          <div>
            <div
              className="sub__home__left__top_dashboard"
              onClick={() => setMenuOpen(false)}
            >
              <VscDashboard className="icon_home" />
              Dashboard
            </div>
            <div
              className="sub__home__left__top_transaction"
              onClick={() => setMenuOpen(false)}
            >
              <BsTags className="icon_home" /> Transaction
            </div>
            <p className="sub__home__left__top_schedules">
              <AiOutlineSchedule className="icon_home" />
              Schedules
            </p>
            <div className="sub__home__left__top_user">
              <BiUserCircle className="icon_home" />
              User
            </div>
            <div className="sub__home__left__top_settings">
              <FiSettings className="icon_home" />
              Settings
            </div>
          </div>
        </div>
        <div className="sub__home__left__btm">
          <p className="sub__home__left__btm_point mar">Help</p>
          <p className="sub__home__left__btm_point">Contact Us</p>
        </div>
      </div>
    </>
  );
}

export default SideBar;
