import React, { useState, useEffect } from 'react';
import '../GeneralComponentsCss/Header.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';

function Header() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + '/assets/images/collegeLogoText.png'}
        className="App-logo"
        alt="logo"
        onClick={() => navigate('/home-page')}
      />

      {isMobile ? (
        <img
          src={process.env.PUBLIC_URL + '/assets/images/hamburger.png'}
          className="hamburger"
          alt="hamburger"
          onClick={() => setIsMenuOpen(true)}
        />
      ) : (
        <div className='div-navbar'>
          <Navbar />
        </div>
      )}

      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}

      <img
        src={process.env.PUBLIC_URL + '/assets/images/orangeTriangle.png'}
        alt="orangeTriangle"
        className="orangeTriangle"
      />
      <img
        src={process.env.PUBLIC_URL + '/assets/images/blueTriangle.png'}
        alt="blueTriangle"
        className="blueTriangle"
      />
    </header>
  );
}

export default Header;
