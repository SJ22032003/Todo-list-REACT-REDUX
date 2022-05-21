import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
function About() {
  const myTheme = useSelector((state) => state.changeTheme.check);
  const myThemeStyle = {
    color: myTheme && "rgb(101, 101, 101)",
    backgroundColor: myTheme && "#cfcfcf",
    background:{
      backgroundColor: myTheme && "rgb(101, 101, 101)",
    }
  }
  return (
    <div className="main-container">
      <div className="main-about rounded" style = {myThemeStyle.background} >
        <div className="about-heading m-3">
          <h1 className="pl-2">About</h1>
        </div>
        <div className="about-content m-3 p-4 rounded" style={myThemeStyle}>
          This project is a simple todo list app. It is built using React.js,
          Redux , React-Router. This project is a part of my learning journey. I
          have used React.js for the frontend and Redux for the state
          management. I have used React-Router for the routing. I have used
          Tailwind CSS for the styling with Daisy UI Components.
        </div>
        <div className="social-media">
          <div className="accounts flex">
            <a
              href="https://github.com/SJ22032003?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className="mr-2 faIconStyle"
                style={ myTheme && {color:"white"}}       
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shobhit-jaryal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className="ml-2 faIconStyle"
                style={ myTheme && {color:"white"}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
