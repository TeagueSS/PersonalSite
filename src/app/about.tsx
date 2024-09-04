'use client';

//import SignIn from "./signIn";
import Link from "next/link";

//import styles from "./navbar.module.css";
//import Upload from "./upload";
import { useEffect, useState } from "react";

function About() {
  // Initialize user state
  return (
<nav id="desktop-nav">
   
<p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Summer 2023 <br />Software Test Engineer ResMed
              </p>

            </div>
            <div className="details-container">
              <img
                src="assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <h2> Bachelors In Computer Science</h2>
              <p>San Diego State University</p>

              <h2>Associates In Computer Science</h2> <p>Mesa Community</p>

            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "location.href='./#experience'")}
        
      />
    
    
    
    </nav>
  );
}

export default About;


