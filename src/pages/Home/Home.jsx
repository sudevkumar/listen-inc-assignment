import React, { useState } from "react";
import HomeComponent from "../../components/HomeComponent/HomeComponent";
import SideBar from "../../components/SideBar/SideBar";
import "./home.css";

function Home() {
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

export default Home;
