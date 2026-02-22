import React, { useEffect } from 'react';
import '../../MainTopicsCss/RelationsResult.css';
import RelationsData from '../../Data/RelationsData.jsx';

function RelationsResult({
    selectedItemStep1,
    selectedItemsStep2,
    setSelectedItemsStep2,
    setTitle,
    navigateToStep1,
}) {
    const selectedData = RelationsData[selectedItemStep1] || [];
    const currentIndex = selectedData.findIndex(
        (item) => item.name === selectedItemsStep2
    );
    const itemData = selectedData[currentIndex];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 🔹 הופך כל משפט לפריט רשימה (li) עם יישור מושלם
    const renderBulletsPerSentence = (text) => {
        if (!text) return null;

        const sentences = text
            .split('.')
            .map((sentence) => sentence.trim())
            .filter((sentence) => sentence.length > 0);

        return (
            <ul style={{ margin: 0, paddingRight: '20px', direction: 'rtl' }}>
                {sentences.map((sentence, index) => (
                    <li key={index}>{sentence}.</li>
                ))}
            </ul>
        );
    };

    const updateTitle = (nextItem) => {
        if (selectedItemStep1 === 'יקל"ר') {
            setTitle(
                <span>
                    ממשק בין{' '}
                    <span style={{ color: '#f90' }}>
                        {selectedItemStep1}
                    </span>{' '}
                    ו{nextItem}
                </span>
            );
        } else {
            setTitle(`ממשק בין ${selectedItemStep1} ו${nextItem}`);
        }
    };

    const handleNext = () => {
        if (selectedData.length > 0) {
            const nextIndex = (currentIndex + 1) % selectedData.length;
            const nextItem = selectedData[nextIndex].name;
            setSelectedItemsStep2(nextItem);
            updateTitle(nextItem);
            window.scrollTo(0, 0);
        }
    };

    const handlePrev = () => {
        if (selectedData.length > 0) {
            const prevIndex =
                (currentIndex - 1 + selectedData.length) % selectedData.length;
            const prevItem = selectedData[prevIndex].name;
            setSelectedItemsStep2(prevItem);
            updateTitle(prevItem);
            window.scrollTo(0, 0);
        }
    };

    const handlePrintRelationsClick = () => {
        window.open(
            `${process.env.PUBLIC_URL}/assets/pdf/ממשקים בין מכלולים.pdf`,
            '_blank'
        );
    };

    return (
        <div className="Interfaces">
            <div className="sub-Interfaces">הממשקים בין המכלולים</div>

            <div className="Interfaces-contect">
                <div className="title-Interfaces" id="title1-Interfaces">
                    מקבל מהמכלול
                </div>

                <div
                    className="text-Interfaces"
                    id="text1-Interfaces"
                    style={{ direction: 'rtl', textAlign: 'right' }}
                >
                    {itemData
                        ? renderBulletsPerSentence(itemData.connections[1])
                        : null}
                </div>

                <div
                    className="title-Interfaces"
                    id="title2-Interfaces"
                    style={{
                        backgroundColor:
                            selectedItemStep1 === 'יקל"ר' ? '#f90' : '#1cb4e3',
                    }}
                >
                    נותן למכלול
                </div>

                <div
                    className="text-Interfaces"
                    id="text2-Interfaces"
                    style={{ direction: 'rtl', textAlign: 'right' }}
                >
                    {itemData
                        ? renderBulletsPerSentence(itemData.connections[0])
                        : null}
                </div>
            </div>

            <div className="btn-div-Interfaces">
                <div
                    className="btn-Interfaces"
                    id="prev-btn-Interfaces"
                    onClick={handlePrev}
                >
                    לממשק הקודם
                </div>
                <div
                    className="btn-Interfaces"
                    id="next-btn-Interfaces"
                    onClick={handleNext}
                >
                    לממשק הבא
                </div>
            </div>

            <div className="Interfaces-back">
                <div id="stpe1btn-Interfaces" onClick={navigateToStep1}>
                    חזרה לבחירת מכלול ראשון
                </div>
            </div>

            <div id="btn-print-relations2" onClick={handlePrintRelationsClick}>
                <img
                    src={process.env.PUBLIC_URL + '/assets/images/print.png'}
                    className="print-img-relations2"
                    alt="print"
                />
                <p className="text-print-relations2">הורדת גרסה להדפסה</p>
            </div>
        </div>
    );
}

export default RelationsResult;