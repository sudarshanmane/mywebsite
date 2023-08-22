import React from "react";
import "./contact.scss";
import { Button, message, Divider, Form, Input } from "antd";
import emailjs from "emailjs-com";

import {
  GithubFilled,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-container-header">
        <h1 style={{ marginTop: "10px" }}>Contact Me</h1>
        <Divider style={{ borderColor: "teal" }}></Divider>
        <div className="contact-main-container">
          <div className="contact-email-container">
            <h2>Connect with Me Impressed by my work?</h2>
            <h2>Feel welcome to contact me via:</h2>
          </div>
          <div className="contact-links-container">
            <div className="images-container">
              <Link to={"mailto:sudarshanmane2110@gmail.com"} target="_blank">
                <div>
                  <MailFilled></MailFilled>
                  Email
                </div>
              </Link>
              <Link to={"tel:9370105149"}>
                <div>
                  <PhoneFilled></PhoneFilled>
                  Phone
                </div>
              </Link>

              <Link
                to="https://www.linkedin.com/in/sudarshan-mane-065823236/"
                target="_blank"
              >
                <div>
                  <LinkedinFilled></LinkedinFilled>
                  Linkedin
                </div>
              </Link>
              <Link to="https://github.com/sudarshanmane" target="_blank">
                <div>
                  <GithubFilled></GithubFilled>
                  GitHub
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
