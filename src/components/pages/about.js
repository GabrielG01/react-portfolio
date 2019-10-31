import React from "react";
import picture from "../../../static/assets/images/auth/login.jpg";

const About = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + picture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Super epic bio here. I'm 35, epic and super cringe. I love bad babes and
        booze!
      </div>
    </div>
  );
};

export default About;
