import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Himanshu 03.jpg";
import sublogo from "../../assets/images/Logo-H.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
        <img className="sub-logo" src={sublogo} alt="logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          className="about-link"
          activeclassname="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          className="contact-link"
          activeclassname="active"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/himanshu-patel-965a87166/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
          </a>
          <a target="_blank"
          rel="noreferrer"
          href="https://github.com/himanshupatel457">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
