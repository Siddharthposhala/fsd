// Home.js

import React from "react";
import "./Home.css";
import profilePic from "./me1.jpg"; // Replace with the path to your profile picture

const Home = () => {
  return (
    <main className="main">
      <div className="profile">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="content">
        <h2>Welcome to My Portfolio</h2>
        {/* Add more content here */}
        <div className="content">
          <p className="introduction">
            Hello, I'm siddharth poshala .<br></br> I'm a student at Vardhaman
            college of engineering This is my portfolio where I showcase my
            projects and share a little bit about myself. Feel free to explore
            and get in touch!
          </p>
          <br></br>
        </div>
      </div>
    </main>
  );
};

export default Home;
