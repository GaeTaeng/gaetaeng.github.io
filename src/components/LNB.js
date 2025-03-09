import React from 'react';
import './LNB.css';
import { FaHome, FaTachometerAlt, FaCompass, FaChartLine,
    FaCog, FaUser, FaEnvelope, FaSignOutAlt, FaBookOpen, FaBookReader   } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LNB() {
  return (
    <nav className="menu">
      <ul className="menu-content">
        <li className="menu-item">
          <a href="#home" className="menu-link">
            <FaHome className="menu-icon" />
            <span className="menu-text">Home</span>
          </a>
        </li>
        <li className="menu-item">
          <Link to="/portfolio" className="menu-link">
          <FaBookOpen className="menu-icon" />
            <span className="menu-text">Portfolio</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/resume" className="menu-link">
          <FaBookReader  className="menu-icon" />
            <span className="menu-text">Resume</span>
          </Link>
        </li>

        
        {/* <li className="menu-item">
          <a href="#dashboard" className="menu-link">
            <FaTachometerAlt className="menu-icon" />
            <span className="menu-text">Dashboard</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#explore" className="menu-link">
            <FaCompass className="menu-icon" />
            <span className="menu-text">Explore</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#analytics" className="menu-link">
            <FaChartLine className="menu-icon" />
            <span className="menu-text">Analytics</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#settings" className="menu-link">
            <FaCog className="menu-icon" />
            <span className="menu-text">Settings</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#account" className="menu-link">
            <FaUser className="menu-icon" />
            <span className="menu-text">Account</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#contact" className="menu-link">
            <FaEnvelope className="menu-icon" />
            <span className="menu-text">Contact</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#logout" className="menu-link">
            <FaSignOutAlt className="menu-icon" />
            <span className="menu-text">Logout</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default LNB;
