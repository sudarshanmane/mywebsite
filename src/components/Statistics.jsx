import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./statistics.scss";
import { Space } from "antd";

const Statistics = () => {
  return (
    <div className="statistics_container">
      <div className="github_calender">
        <Space direction="vertical">
          <h1> My Github statistics</h1>
          <img
            src="https://github-stats-alpha.vercel.app/api?username=sudarshanmane"
            alt="stat"
          />

          <h1>
            <a href="https://github.com/sudarshanmane">@sudarshanmane </a>{" "}
            <div style={{ width: "10px" }}></div> My GitHub Calender
          </h1>
          <div className="calender">
            <GitHubCalendar className="calender" username="sudarshanmane" />
          </div>
        </Space>
      </div>
    </div>
  );
};

export default Statistics;
