import { Avatar, Button, Segmented, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import "../Images/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import About from "./About";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let [selectedPage, setSelectedPage] = useState([]);

  useEffect(() => {
    const skills = location.pathname;
    selectedPage = skills.split("/")[2];
    setSelectedPage(selectedPage);
  }, [location]);

  function changed(value) {
    setSelectedPage(value);

    if (value !== "resume") navigate(`/ReactPortfolio/${value}`);
  }
  return (
    <div className="navbar_container">
      <Space className="portfolio_log_image">
        <Link to={"/ReactPortfolio/home"}>
          <img src={require("../Images/Logo.png")} alt="logo" />
        </Link>
      </Space>
      <Space direction="vertical">
        <Segmented
          value={selectedPage}
          className="custom-segmented"
          onChange={changed}
          options={[
            {
              label: <div>Home</div>,
              value: "home",
            },
            {
              label: <div>About Me</div>,
              value: "about",
            },
            {
              label: <div>Skills</div>,
              value: "skills",
            },
            {
              label: <div>Projects</div>,
              value: "projects",
            },
            {
              label: <div>Statistics</div>,
              value: "statistics",
            },
            {
              label: <div>Contact</div>,
              value: "contact",
            },
            {
              label: <div>Resume</div>,
              value: "resume",
            },
          ]}
        />
      </Space>
    </div>
  );
};

export default Navbar;
