import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../GeneralComponentsCss/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li
          className={isActive('/home-page') ? 'active' : ''}
          onClick={() => handleNavigate('/home-page')}
        >
          עמוד הבית
        </li>
        <li
          className={isActive('/diagram') ? 'active' : ''}
          onClick={() => handleNavigate('/diagram')}
        >
          מבנה הרשות
        </li>
        <li
          className={isActive('/gallery') ? 'active' : ''}
          onClick={() => handleNavigate('/gallery')}
        >
          העמ"צ בחירום
        </li>
        <li
          className={isActive('/relations') ? 'active' : ''}
          onClick={() => handleNavigate('/relations')}
        >
          ממשקי מכלולים
        </li>
        <li
          className={isActive('/target') ? 'active' : ''}
          onClick={() => handleNavigate('/target')}
        >
          יעדים לאומיים
        </li>
        <li
          className={isActive('/scenario') ? 'active' : ''}
          onClick={() => handleNavigate('/scenario')}
        >
          תרחיש ייחוס
        </li>
        <li
          className={isActive('/tasks') ? 'active' : ''}
          onClick={() => handleNavigate('/tasks')}
        >
          סד"פ למכלולים
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
