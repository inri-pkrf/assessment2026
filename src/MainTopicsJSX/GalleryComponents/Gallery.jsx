import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryData from '../../Data/GalleryData';
import PhotoList from './PhotoList.jsx';
import CardDetails from './CardDetails.jsx';
import '../../MainTopicsCss/Gallery.css';

const Gallery = () => {
    const navigate = useNavigate();
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePhotoClick = (index) => {
        setSelectedCardIndex(index);
        window.scrollTo(0, 0);
    };

    const handleNext = () => {
        setSelectedCardIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % GalleryData.length;
            window.scrollTo(0, 0);
            return newIndex;
        });
    };

    const handlePrevious = () => {
        setSelectedCardIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + GalleryData.length) % GalleryData.length;
            window.scrollTo(0, 0);
            return newIndex;
        });
    };

    const handleBackToList = () => {
        setSelectedCardIndex(null);
        window.scrollTo(0, 0);
    };

    const handlePrintGalleryClick = () => {
        window.open(`${process.env.PUBLIC_URL}/assets/pdf/עזר - הערכת מצב רשות.pdf`, '_blank');
        window.scrollTo(0, 0);
    };

    const handleImageClickGallery = () => {
        if (isMobile) {
            const fullImagePath = `${process.env.PUBLIC_URL}/assets/images/table.jpg`;
            navigate('/MagnifyPic', { state: { imagePath: fullImagePath } });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="gallery">
            <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/diagramIcon.png'} className="GalleryIcon" alt="Gallery" />

            <h1 className="Gallery-title">הערכת מצב ברשות המקומית</h1>
            <h1 className="Gallery-title-phone">הערכת מצב < br /> ברשות המקומית</h1>

            {selectedCardIndex === null ? (
                <div className='text-gallery'>
                    <p className="gallery-subtitle" id='sub-galley1'>
                        לפניך סדר הדוברים לביצוע הערכת מצב בשעת חירום
                    </p>
                    <img src={process.env.PUBLIC_URL + '/assets/images/table.jpg'} className="table-gallery" alt="table" onClick={handleImageClickGallery} />
                    <div className='MagnifyPic-text-table'>אפשר להגדיל את סדר הדוברים בלחיצה</div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/glass.png`}
                        className="glass-table"
                        alt="glass-table"
                    />

                    <p className="gallery-subtitle" id='sub-galley2'>
                        <b>יש להקפיד על סדר הדוברים, להתמקד בהצפת פערים והמלצות חיוניות לאפקטיביות הערכת המצב</b>
                    </p>
                    <p className="gallery-subtitle" id='sub-galley3'>
                        בלחיצה על כל דובר יפתח חלון עם הסבר נוסף וסרטון הדגמה
                    </p>
                    <img src={process.env.PUBLIC_URL + '/assets/images/hpArrow.png'} className="hpArrow-gallery" alt="Ogen" />
                </div>
            ) : null}

            {selectedCardIndex === null ? (
                <PhotoList data={GalleryData} onPhotoClick={handlePhotoClick} />
            ) : (
                <>
                    <CardDetails card={GalleryData[selectedCardIndex]} />

                    <div className="navigation-buttons">
                        <div onClick={handleNext} alt="Next" className="arrowDiv arrowDivRight">הבא בתור</div>
                        <div onClick={handlePrevious} alt="Previous" className="arrowDiv arrowDivLeft">הקודם</div>
                        <div onClick={handleBackToList} className="prev-btn-gallery">חזרה לסדר דוברים</div>
                    </div>
                </>
            )}

            {selectedCardIndex === null && (
                <div className="btn-print-gallery" onClick={handlePrintGalleryClick}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/print.png'} className="print-img-gallery" alt="print" />
                    <p className="text-print-gallery">הורדת גרסה להדפסה</p>
                </div>
            )}
        </div>
    );
};

export default Gallery;
