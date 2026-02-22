import React, { useEffect, useState } from 'react';
import '../../MainTopicsCss/TargetResult.css';
import TargetData from '../../Data/TargetData.jsx';  

function TargetResult({ selectedItemStep1, selectedItemsStep2, navigateToStep1 }) {
    const [currentColor, setCurrentColor] = useState(''); 
    const [connections, setConnections] = useState([]); 
    const [currentIndex, setCurrentIndex] = useState(0); 

    const correctColors = [
        { string: "יעד מזון ומים", color: "#6fa8dc" },
        { string: "יעד מחסה הולם", color: "#67d7b2" },
        { string: "יעד שירותי רפואה", color: "#ea9999" },
        { string: "מאפשר כוח אדם", color: "#f9cb9c" },
        { string: "מאפשר אנרגיה", color: "#b4a7d6" },
        { string: "מאפשר מידע לציבור", color: "#b7b7b7" },
    ];

    useEffect(() => {
        if (TargetData[selectedItemStep1] && selectedItemsStep2) {
            const index = TargetData[selectedItemStep1].findIndex(item => item.name === selectedItemsStep2);
            setCurrentIndex(index >= 0 ? index : 0);
        }
    }, [selectedItemStep1, selectedItemsStep2]);

    useEffect(() => {
        getConnections();
        getCurrentItemColor();
    }, [currentIndex, selectedItemStep1]);

    const getCurrentItemColor = () => {
        const item = TargetData[selectedItemStep1][currentIndex];
        if (item) {
            const match = correctColors.find(colorItem => colorItem.string === item.name);
            if (match) {
                setCurrentColor(match.color);
            } else {
                setCurrentColor('');
            }
        }
    };

    const getConnections = () => {
        const item = TargetData[selectedItemStep1][currentIndex];
        if (item) {
            setConnections(item.connections);
        }
    };

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? TargetData[selectedItemStep1].length - 1 : newIndex;
        });
        window.scrollTo(0, 0);
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex + 1;
            return newIndex >= TargetData[selectedItemStep1].length ? 0 : newIndex;
        });
        window.scrollTo(0, 0);
    };

    const handlePrintTargetClick = () => {
        window.open(`${process.env.PUBLIC_URL}/assets/pdf/עזר עוגן איתן - מאפשרים.pdf`, '_blank');
    };

    return (
        <div className="interfaces-target">
            <div className='Interfaces-contect-target'>
                <div className='title-InterfacesTarget'>
                    {`מכלול  ${selectedItemStep1} -`}
                    <br />
                    <span style={{ color: currentColor }}>
                        {TargetData[selectedItemStep1][currentIndex]?.name || selectedItemsStep2}
                    </span>
                </div>
                <div
                    className='suTtitle-Interfaces'
                    id='title1-Interfaces'
                    style={{ backgroundColor: currentColor }}
                >
                    תפקיד המכלול:
                </div>
                <div className='text-interfaces-target'>
                    <ul className="connection-list">
                        {connections.map((connection, index) => (
                            <li key={index}>{connection}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='btn-div-target'>
                <div className='btn-Interfaces' id='prev-btn-Interfaces' onClick={handlePrevClick}>
                    הקודם
                </div>
                <div className='btn-Interfaces' id='next-btn-Interfaces' onClick={handleNextClick}>
                    הבא
                </div>
            </div>

            <div className='btnBackToStep1'>
                <div id='stpe1btn' onClick={navigateToStep1}>
                    חזרה לבחירת מכלול
                </div>
            </div>

            <div id="btn-print-target2" onClick={handlePrintTargetClick}>
                <img
                    src={process.env.PUBLIC_URL + '/assets/images/print.png'}
                    className="print-img-target2"
                    alt="print"
                />
                <p className="text-print-target2">הורדת גרסה להדפסה</p>
            </div>

        </div>
    );
}

export default TargetResult;
