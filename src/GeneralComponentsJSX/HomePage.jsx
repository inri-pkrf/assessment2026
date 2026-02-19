import React from 'react';
import '../GeneralComponentsCss/HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home-page">

            <div className="title">
                עזר דיגיטלי לניהול מצבי חירום ברשות המקומית
            </div>

            <div className='div-list'>  
                <div className="photo-list-item" onClick={() => navigate('/tasks')}>
                    <div className="photo-list-content">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-assessment/assesment7.png'} className="photo-list-image-homepage" alt="Ogen" />
                        <div className="photo-list-title-homepage" id='title-homepage-Scenario'> סדר פעולות למכלולים </div>
                    </div>
                </div>
                <div id='line1' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>

                <div className="photo-list-item" onClick={() => navigate('/gallery')}>
                    <div className="photo-list-content">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/diagramIcon.png'} className="photo-list-image-homepage" alt="Gallery" />
                        <div className="photo-list-title-homepage"> הערכת מצב ברשות המקומית בחירום </div>
                    </div>
                </div>
                <div id='line2' className='dot-line'>. . . . . . . . . . . . .   . . . . . . . . . . . . . . . . . . . . . . .  </div>

                <div className="photo-list-item" onClick={() => navigate('/relations')}>
                    <div className="photo-list-content">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/mimshak.png'} className="photo-list-image-homepage" alt="Relations" />
                        <div className="photo-list-title-homepage">ממשקי עבודה בין מכלולים</div>
                    </div>
                </div>
                <div id='line3' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

                <div className="photo-list-item" onClick={() => navigate('/target')}>
                    <div className="photo-list-content">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/icon-des.png'} id='icon-des' className="photo-list-image-homepage" alt="Target" />
                        <div className="photo-list-title-homepage" id='title-homepage-target'>  יעדים לאומיים </div>
                    </div>
                </div>
                <div id='line4' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>
                <div className="photo-list-item" onClick={() => navigate('/scenario')}>
                    <div className="photo-list-content">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/ogenIcon.png'} className="photo-list-image-homepage" alt="Scenario" />
                        <div className="photo-list-title-homepage" id='title-homepage-Scenario'> תרחיש ייחוס מישקי </div>
                    </div>
                </div>
                
                <div id='line5' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
                <div className="photo-list-item" onClick={() => navigate('/diagram')} >
                    <div className="photo-list-content">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/mivne.png'} className="photo-list-image-homepage" alt="Diagram" />
                        <div className="photo-list-title-homepage">מבנה הרשות המקומית בחירום</div>
                    </div>
                </div>
            </div>


            <div className='mashov-home'>
                <div className='mashovText'>
                    <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
                    <br /> <a id='linkHome' href="https://docs.google.com/forms/d/e/1FAIpQLScvCPjvm6G7IIXdtoeNmcF2COJ3D7xkTfP4n0xaS0T-nRpkPA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                        בקישור הבא
                    </a>
                </div>
            </div>

        </div>

    );
}

export default HomePage;