import React, { useState, useRef, useEffect } from 'react';
import '../../MainTopicsCss/Relations.css';
import RelationsResult from './RelationsResult';

function Relations() {

  const initialArray = [
    'מבצעים',
    'אוכלוסיה',
    'חינוך',
    'מידע לציבור',
    'הנדסה ותשתיות',
    'לוגיסטיקה ותפעול',
    'מינהל כללי ומשא"ן',
    'יקל"ר'
  ];

  const [title, setTitle] = useState('בחירת מכלול');
  const [titleColor, setTitleColor] = useState('#50565c');
  const [text, setText] = useState('יש לבחור את המכלול הראשי');
  const [selectedItemStep1, setSelectedItemStep1] = useState(null);
  const [selectedItemsStep2, setSelectedItemsStep2] = useState(null);
  const [step, setStep] = useState(1);
  const [step1Color, setStep1Color] = useState('rgb(86 195 232)');
  const [step2Color, setStep2Color] = useState('rgb(217 217 217)');
  const [step3Color, setStep3Color] = useState('rgb(217 217 217)');
  const [newComponent, setNewComponent] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [arrayOfMechlol, setArrayOfMechlol] = useState(initialArray);
  const introRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleClick = (item) => {
    setSelectedItemStep1(item);
    setTitle(`מכלול ${item}`);
    setTitleColor('#56c3e8');
    setText('יש לבחור מכלול נוסף, בכדי לצפות בממשקים שלו כחלק מהעבודה השוטפת ');
    setStep(2);
    setArrayOfMechlol(arrayOfMechlol.filter(mechlol => mechlol !== item));
    setStep1Color('rgb(86 195 232)');
    setStep2Color('rgb(86 195 232)');
  };

  const handleStepClick = (stepNumber) => {
    if (stepNumber <= step) {
      if (stepNumber === 1) {
        setStep(1);
        setSelectedItemStep1(null);
        setSelectedItemsStep2(null); 
        setTitle('בחירת מכלול');
        setTitleColor('#50565c');
        setText('יש לבחור את המכלול הראשי');
        setArrayOfMechlol(initialArray);
        setStep1Color('rgb(86 195 232)'); 
        setStep2Color('rgb(217 217 217)'); 
        setStep3Color('rgb(217 217 217)'); 
        setNewComponent(false); 
      } else if (stepNumber === 2) {
        setStep(2);
        setStep2Color('rgb(86 195 232)'); 
        setStep3Color('rgb(217 217 217)');
        setNewComponent(false); 
        setText('יש לבחור מכלול נוסף, בכדי לצפות בממשקים כחלק מהעבודה השוטפת');
        if (selectedItemStep1) {
          setTitle(`מכלול ${selectedItemStep1}`);
        } else {
          setTitle('בחירת מכלול');
        }
      } else if (stepNumber === 3) {
        setStep(3);
        setStep3Color('rgb(86 195 232)');
      }
    }
  };

  const handleItemClick = (item) => {
    if (step === 2) {
      setSelectedItemsStep2(item);
      setStep2Color('rgb(86 195 232)');
      setStep3Color('rgb(86 195 232)');
      if (selectedItemStep1 === 'יקל"ר') {
        setTitle(
          <span>
            ממשק בין <span style={{ color: '#f90' }}>{selectedItemStep1}</span> ו{item}
          </span>
        );
      } else {
        setTitle(
          <span>
            ממשק בין {selectedItemStep1} ו{item}
          </span>
        );
      }
      setNewComponent(true);
      setStep(3);
    } else {
      handleClick(item);
    }
  };

  const handleArrowClick = () => {
    setIntroVisible(false);
  };

  const handlePrintRelationsClick = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/pdf/ממשקים בין מכלולים.pdf`, '_blank');
  };

  const navigateToStep1 = () => {
    setStep(1);
    setSelectedItemStep1(null);
    setSelectedItemsStep2(null); 
    setTitle('בחירת מכלול');
    setTitleColor('#50565c');
    setText('יש לבחור את המכלול הראשי');
    setArrayOfMechlol(initialArray);
    setStep1Color('rgb(86 195 232)');
    setStep2Color('rgb(217 217 217)');
    setStep3Color('rgb(217 217 217)'); 
    setNewComponent(false); 
  };

  return (
    <div className="Relations">
      {introVisible ? (
        <div className='intro-div-Relations' ref={introRef}>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/logos-home/mimshak.png'}
            className="photo-mimshak-intro"
            alt="Relations"
          />
          <div className="title-intro-rel">ממשקים בין מכלולים
          </div>
          <div className="sub-intro-rel">
            לפניך מערכת הצלבה בין המכלולים. <br />כאן ניתן ללמוד על תפקיד המכלול שלי, מה מכלולים אחרים צריכים לקבל ממני ומה אני מהם
          </div>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/hpArrow.png'}
            className="hpArrow-Relations"
            alt="Arrow"
            onClick={handleArrowClick}
          />
        </div>
      ) : (
        <div className='Relations-div'>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/logos-home/mimshak.png'}
            className="photo-mimshak"
            alt="Relations"
          />

          <div className='all-steps'>
            <div
              className='btn-steps'
              id='step1'
              style={{ backgroundColor: step1Color }}
              onClick={() => handleStepClick(1)}
            >
              שלב 1
              <div className='arrow-down' id='arrow-down1' style={{ display: step === 1 ? 'block' : 'none' }}></div>
            </div>
            <div
              className={`btn-steps ${step < 2 ? 'disabled' : ''}`} 
              id='step2'
              style={{ backgroundColor: step2Color }}
              onClick={() => step >= 1 && handleStepClick(2)} 
            >
              שלב 2
              <div className='arrow-down' id='arrow-down2' style={{ display: step === 2 ? 'block' : 'none' }}></div>
            </div>
            <div
              className={`btn-steps ${step < 3 ? 'disabled' : ''}`}
              id='step3'
              style={{ backgroundColor: step3Color }}
              onClick={() => step >= 2 && handleStepClick(3)} 
            >
              שלב 3
              <div className='arrow-down' id='arrow-down3' style={{ display: step === 3 ? 'block' : 'none' }}></div>
            </div>
          </div>

          <div className="title-page1" style={{ color: titleColor }}>
            {title}
          </div>

          {(step === 2 || step === 3) && <div className='sub-text-relations'>בחרת ב</div>}

          <div className='content-page1' ref={contentRef}>
            <div className="text-page1" style={{ display: newComponent ? 'none' : 'block' }}>
              {text}
            </div>

            <div className='all-opotion' style={{ display: newComponent ? 'none' : 'block' }}>
              {arrayOfMechlol.map((item, index) => (
                <div
                  key={index}
                  className="array-item"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>

            <div id='btn-print-relations1' onClick={handlePrintRelationsClick} style={{ display: step === 3 ? 'none' : 'block', marginTop: step === 1 ? '99vh' : "89vh" }}>
              <img src={process.env.PUBLIC_URL + '/assets/images/print.png'} className="print-img-relations1" alt="print" />
              <p className='text-print-relations1'>הורדת גרסה להדפסה</p>
            </div>

            {newComponent && <RelationsResult
              selectedItemStep1={selectedItemStep1}
              selectedItemsStep2={selectedItemsStep2}
              setSelectedItemsStep2={setSelectedItemsStep2}
              setTitle={setTitle}
              navigateToStep1={navigateToStep1}
            />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Relations;