import React from "react";
import Navbar from "./Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { Segmented } from "antd";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import "../Images/animation1.gif";
import "./hi.gif";

const Home = () => {
  return (
    <div className="home_content">
      <div>
        <h1> Hi, my name is </h1>
        <Typewriter
          options={{
            strings: [`<h1> Sudarshan mane </h1>`, `<h1> Sudarshan mane </h1>`],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div>
        <img src="../hi.gif" alt="asdfasfda" />
      </div>
    </div>
  );
};

export default Home;
