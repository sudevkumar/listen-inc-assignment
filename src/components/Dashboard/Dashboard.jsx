import React, { useState } from "react";
import HomeComponent from "../HomeComponent/HomeComponent";
import SideBar from "../SideBar/SideBar";

function Dashboard() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className={click === true ? "home opacity" : "home"}>
      <div className="sub__home">
        <SideBar />
        <HomeComponent
          handleClick={handleClick}
          click={click}
          setClick={setClick}
        />
      </div>
    </div>
  );
}

export default Dashboard;
