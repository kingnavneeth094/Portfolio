import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import moon from './images/moon.png';
import sun from './images/sun.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
      <div className="navbar_name">Navneeth</div>
      <div className="menu-icon" onClick={handleToggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar_container_menu ${menuOpen ? 'open' : ''}`}>
        <li className="navbar_container_menu_item">
          <Link smooth className="navbar_container_menu_item_link" to="#home" aria-label="Go to Home" onClick={handleToggleMenu}>Home</Link>
        </li>
        <li className="navbar_container_menu_item">
          <Link smooth className="navbar_container_menu_item_link" to="#about" aria-label="Go to About" onClick={handleToggleMenu}>About</Link>
        </li>
        <li className="navbar_container_menu_item">
          <Link smooth className="navbar_container_menu_item_link" to="#projects" aria-label="Go to Projects" onClick={handleToggleMenu}>Projects</Link>
        </li>
        <li className="navbar_container_menu_item">
          <Link smooth className="navbar_container_menu_item_link" to="#contact" aria-label="Go to Contact" onClick={handleToggleMenu}>Contact</Link>
        </li>
      </ul>
      {darkMode ? (
        <img
          src={moon}
          alt="Moon"
          className="dark-mode-icon"
          style={{ width: '20px', height: '20px' }}
          onClick={handleClick}
        />
      ) : (
        <img
          src={sun}
          alt="Sun"
          className="light-mode-icon"
          style={{ width: '20px', height: '20px' }}
          onClick={handleClick}
        />
      )}
    </nav>
  );
};

export default Navbar;
