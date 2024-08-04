import React from 'react';

const Navbar = () => {
  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left">
        <h1></h1>
      </div>
      <div className="right ">
        <a href="#home" className="nav_items">
          Home
        </a>
        <a href="#experience" className="nav_items">
          {" "}
          Experience
        </a>
        <a href="#skills" className="nav_items">
          Skills
        </a>
        <a href="#project" className="nav_items">
          Projects
        </a>
        <a href="#contact" className="nav_items">
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Navbar