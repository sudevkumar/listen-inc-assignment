import React from "react";
import "./sidebar.css";
import { BsTags } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

function SideBar() {
  return (
    <div className="sub__home__left">
      <div className="sub__home__left__top">
        <span>Board.</span>
        <div>
          <div className="sub__home__left__top_dashboard">
            <VscDashboard className="icon_home" />
            Dashboard
          </div>
          <div className="sub__home__left__top_transaction">
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
  );
}

export default SideBar;
