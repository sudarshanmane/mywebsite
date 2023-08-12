import React from "react";
import "./aboute.scss";
import { Badge, Button, Divider } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div className="aboutr_me_container">
      <div className="about_me_main_container">
        <div className="image_info_container">
          <img
            src="https://img.freepik.com/premium-photo/elegant-golden-blue-flowers-branches-light-background-vintage-floral-decor-postcard_434911-173.jpg?w=1380"
            alt="avtar"
          />
          <div className="info_container">
            <h1>I'm Sudarshan </h1>
            <h1>Aspiring Data Science</h1>
            <Divider style={{ borderColor: "teal" }}></Divider>
            <p>
              About Me A self Motivated and Ambitious Java Developer.
              Problem-solving mindset and ability to perform well in
              collaboration. seeking a job in an organization where I can learn
              new skills and utilize skills for the growth of myself and the
              organization. Education 2017- 2021 Bachelor's of Engineering. Pune
              University
            </p>
          </div>
        </div>
        <div className="foter_info">
          <Button type="primary" style={{ width: "100%" }}>
            Resume <DownloadOutlined></DownloadOutlined>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
