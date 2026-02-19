import React from 'react';
import '../GeneralComponentsCss/Menu.css';
import { useNavigate } from 'react-router-dom';

function Menu({ onClose }) {
    const navigate = useNavigate();

    const handleItemClick = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
        onClose();
    };

    return (
        <div className="menu">
            <img src={process.env.PUBLIC_URL + '/assets/images/whiteLogo.png'} alt="whiteLogo" className="whiteLogo-menu" />
            <h1 className="menu-title">עזר לניהול מצבי חירום ברשות המקומית</h1>
            <img src={process.env.PUBLIC_URL + '/assets/images/closeBtn.png'} alt="closeBtn" onClick={onClose} className="closeBtn-menu" />

            <ul className="menu-list">

                <li onClick={() => handleItemClick('/home-page')}>עמוד הבית</li>
                <div className='lineMenu'></div>

                <li onClick={() => handleItemClick('/tasks')}> סד"פ למכלולים</li>
                <div className='lineMenu' id='lineMenu'></div>

                <li onClick={() => handleItemClick('/gallery')}>הערכת מצב ברשות המקומית בחירום</li>
                <div className='lineMenu'></div>

                <li onClick={() => handleItemClick('/relations')}>ממשקי עבודה בין מכלולים</li>
                <div className='lineMenu'></div>

                <li onClick={() => handleItemClick('/target')}>יעדים לאומיים</li>
                <div className='lineMenu'></div>

                <li onClick={() => handleItemClick('/scenario')}>תרחיש ייחוס מישקי</li>
                <div className='lineMenu' ></div>

                <li  onClick={() => handleItemClick('/diagram')}>מבנה הרשות המקומית בחירום</li>
                <div className='lineMenu'></div>

            </ul>

            <div className='mashov-menu'>
                <div className='mashovTextMenu'>
                    <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
                    <br />
                    <a
                        id='linkMenu'
                        href="https://docs.google.com/forms/d/e/1FAIpQLScvCPjvm6G7IIXdtoeNmcF2COJ3D7xkTfP4n0xaS0T-nRpkPA/viewform?usp=sf_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        בקישור הבא
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
