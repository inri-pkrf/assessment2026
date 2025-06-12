import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../GeneralComponentsCss/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li
          className={isActive('/home-page') ? 'active' : ''}
          onClick={() => navigate('/home-page')}
        >
          עמוד הבית
        </li>
        <li
          className={isActive('/diagram') ? 'active' : ''}
          onClick={() => navigate('/diagram')}
        >
          מבנה הרשות
        </li>
        <li
          className={isActive('/gallery') ? 'active' : ''}
          onClick={() => navigate('/gallery')}
        >
          העמ"צ בחירום
        </li>
        <li
          className={isActive('/relations') ? 'active' : ''}
          onClick={() => navigate('/relations')}
        >
          ממשקי מכלולים
        </li>
        <li
          className={isActive('/target') ? 'active' : ''}
          onClick={() => navigate('/target')}
        >
          יעדים לאומיים
        </li>
        <li
          className={isActive('/scenario') ? 'active' : ''}
          onClick={() => navigate('/scenario')}
        >
          תרחיש ייחוס
        </li>
          <li
          className={isActive('/tasks') ? 'active' : ''}
          onClick={() => navigate('/tasks')}
        >
          סד"פ למכלולים
        </li>
        {/* <li>יצירת קשר</li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
