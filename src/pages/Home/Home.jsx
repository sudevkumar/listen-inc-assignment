import React from "react";
import HomeComponent from "../../components/HomeComponent/HomeComponent";
import SideBar from "../../components/SideBar/SideBar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="sub__home">
        <SideBar />
        <HomeComponent />
      </div>
    </div>
  );
}

export default Home;
