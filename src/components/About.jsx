import React from "react";
import "./aboute.scss";
import { Badge, Button, Divider } from "antd";
import { BookFilled, BookOutlined, DownloadOutlined } from "@ant-design/icons";

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
            <h1>Aspiring Software Engineer</h1>
            <Divider style={{ borderColor: "teal" }}></Divider>
            <h4 style={{ color: "white" }}>
              A self Motivated and Ambitious Full Stack Developer.
              Problem-solving mindset and ability to perform well in
              collaboration. seeking a job in an organization where I can learn
              new skills and utilize skills for the growth of myself and the
              organization.
            </h4>
            <div style={{ marginTop: "10px" }}></div>
            <h1>
              <BookOutlined style={{ color: "yellow" }}></BookOutlined>Education
            </h1>
            <performance style={{ color: "pink" }}>
              07/2017- 07/2021 Bachelor's of Engineering. <br />
              College : MMIT Pune
              <br /> University Pune University
            </performance>
            <div style={{ marginTop: "10px" }}></div>
            <h1>
              <BookOutlined style={{ color: "yellow" }}></BookOutlined>
              Organization
            </h1>
            <p style={{ color: "pink" }}>
              Organization : Metamind System Private Limited
              <br />
              02/2023 - Current
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
