
import React, { useEffect } from 'react';
import '../MainTopicsCss/Scenario.css';

function Scenario() {
  const images = [
    { src: '/assets/images/logos-ogen/ogen1.png', title: 'מים', text: 'הפסקה באספקת המים למשך מספר ימים ' },
    { src: '/assets/images/logos-ogen/ogen2.png', title: 'מערכת קשר', text: 'שיבושים מקומיים לפרקי זמן קצרים' },
    { src: '/assets/images/logos-ogen/ogen3.png', title: 'טלפון ', text: 'נתק של עד 8 שעות במערכות התקשורת הקווית' },
    { src: '/assets/images/logos-ogen/ogen4.png', title: 'סלולר ', text: 'נתק של 24 שעות בשירותי דיבור וגלישה' },
    { src: '/assets/images/logos-ogen/ogen5.png', title: 'אינטרנט ', text: 'הפסקת השירות  למשך יומיים' },
    { src: '/assets/images/logos-ogen/ogen6.png', title: 'חשמל ', text: ' 2-3 יממות רצופות של עלטה' },
    { src: '/assets/images/logos-ogen/ogen7.png', title: 'ספקים חיצוניים', text: 'יפעלו רק מפעלים חיוניים עם התייצבות חלקית של עובדים חיוניים' },
    { src: '/assets/images/logos-ogen/ogen8.png', title: 'עובדים זרים', text: '90%-75% מהעובדים יעזבו את עבודתם' },
    { src: '/assets/images/logos-ogen/ogen9.png', title: 'עובדים', text: 'ירידה של 40% בהתייצבות עובדים במקומות העבודה    ' },
    { src: '/assets/images/logos-ogen/ogen10.png', title: 'היסעים', text: 'ירידה של 50%-30% בזמינות שירותי התחבורה הציבורית' },
    { src: '/assets/images/logos-ogen/ogen11.png', title: '  דלק ', text: 'שיבושים קלים' },
    { src: '/assets/images/logos-ogen/ogen12.png', title:<> גפ"מ<br /> <span style={{ fontSize: '0.8em'}}>(גז פחמימני מעובה)</span> </>, text: 'שיבושים במועדי ההספקה ' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ogen-container">
      <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/ogenIcon.png'} alt="ogenIcon" className="ogenIcon" />
      <h1 className="ogen-title1"> תרחיש ייחוס משקי </h1>
      <p className="ogen-subtitle1">
        לפניך סרטון הסבר ופירוט תרחיש ייחוס גנרי להדגמת ההשפעות האפשריות על המשק.
        <br />
        נדרשת התאמה לכל רשות.
      </p>
      <div className="video-container">
        <video controls className="ogen-video" poster={process.env.PUBLIC_URL + '/assets/images/poster.jpg'}>
          <source src={process.env.PUBLIC_URL + '/assets/videos/ogenVideo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <img src={process.env.PUBLIC_URL + '/assets/images/hpArrow.png'} className="hpArrow-Ogen" alt="Ogen"></img>

      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={process.env.PUBLIC_URL + image.src} alt={`Image ${index + 1}`} className="ogen-image" />
            <h2 className="image-title">{image.title}</h2>
            <p id={`image-text-${index}`} className="image-text">{image.text}</p>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Scenario;
