import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./PortFolio.scss";

const PortFolio = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      for (let i = 0; i < 200; i++) {
        const circle = {
          width: Math.random(8, 16),
          height: Math.random(8, 16),
          startPositionY: Math.random(10, 100),
          moveDuration: 28000 + Math.random(9000),
        };

        const animationName = `move-frames-${i}`;

        circle.animation = {
          name: animationName,
          duration: circle.moveDuration,
          delay: Math.random(37000),
        };

        setParticles([...particles, circle]);
      }
    };

    generateParticles();

    const interval = setInterval(generateParticles, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home_container">
      <div className="navbar_container">
        <Navbar></Navbar>
      </div>
      <div className="content_container_portfolio">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default PortFolio;
