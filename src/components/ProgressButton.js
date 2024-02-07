import React from 'react';
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { resetAnswers } from '../helpers/reset-state.helpers';

const ProgressButton = ({ hideButton, currentAnswer, questionID }) => {
    const { progress, setProgress } = React.useContext(ProgressContext);
    const { setType, setTaste, setTexture } = React.useContext(TypeTasteTextureContext);
const backBtnClass = hideButton ? 'hiddenBtn' : '';
const prevAnswerRef = React.useRef();

React.useEffect(() => {
    // Store the current answer in the ref when the component mounts
    prevAnswerRef.current = currentAnswer;
    console.log('prevAnswerRef.current useEffect:', prevAnswerRef.current);
    console.log('currentAnswer:', currentAnswer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const  handleProgressClick = (id) => {
        if (id === "nextBtn") {
            if ( (typeof prevAnswerRef.current != "undefined" && prevAnswerRef.current !== currentAnswer) || (questionID === "0")) {
                resetAnswers(questionID, setType, setTaste, setTexture);
                console.log('User changed their answer!');
              }
         setProgress(progress + 1);
        } else if (id === "backBtn") {
            setProgress(progress - 1);
        }
    }
    
    return (
        <>
        <button id="backBtn" className={backBtnClass} onClick={() => handleProgressClick("backBtn")}>Back</button>
        <button id="nextBtn" onClick={() => handleProgressClick("nextBtn")}>Next</button>
        </>
    );
    }

export default ProgressButton;