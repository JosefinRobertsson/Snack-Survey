import React from 'react';
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import { PriceContext } from './PriceProvider';
import { SnackSuggestionContext } from './SnackSuggestionProvider';
import { resetAnswers } from '../helpers/reset-state.helpers';
import { BaseButton } from '../styles/buttons.styles';
import nextSoundEffect from '../sounds/next-button-effect.wav';

const ProgressButton = ({ hideButton, currentAnswer, questionID, progressButtonName, backButtonName }) => {
    const { progress, setProgress, setPrevProgress, setShowProgressBar } = React.useContext(ProgressContext);
    const { setType, setTaste, setTexture } = React.useContext(TypeTasteTextureContext);
    const { setFlavor, setImportantCategories } = React.useContext(CheckboxChoiceContext);
    const { setPrice } = React.useContext(PriceContext);
    const { setSuggestion, setDropdown } = React.useContext(SnackSuggestionContext);
    //hide the back button on the start screen
    const backBtnClass = hideButton ? 'hiddenBtn' : '';
    const prevAnswerRef = React.useRef();

    // Store the current answer (the one that is already selected) in the ref when the component mounts
    React.useEffect(() => {
        prevAnswerRef.current = currentAnswer;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const playSound = () => {
        const nextButtonAudio = new Audio(nextSoundEffect);
        nextButtonAudio.volume = 0.5;
        nextButtonAudio.play();
      }


    const handleProgressClick = (id) => {
        if (id === "nextBtn") {
            // reset the state of all coming questions if the user changes their answer
            if ((typeof prevAnswerRef.current != "undefined" && prevAnswerRef.current !== currentAnswer) || (questionID === "0")) {
                resetAnswers(questionID, setType, setTaste, setTexture, setFlavor, setPrice, setImportantCategories, setSuggestion, setDropdown, setShowProgressBar);
            }
            playSound();
            setTimeout(() => 
            setProgress(progress + 1), 500)
            setPrevProgress(progress)
        } else if (id === "backBtn") {
            setPrevProgress(progress);
            setProgress(progress - 1);
        }
    }

    return (
        <div className="button-inner">
            <BaseButton 
            id="backBtn" 
            className={backBtnClass} 
            onClick={() => handleProgressClick("backBtn")}> {backButtonName ? backButtonName : '< Back'}
            </BaseButton>
            <BaseButton 
            id="nextBtn" 
            onClick={() => handleProgressClick("nextBtn")}>{progressButtonName ? progressButtonName : 'Next >'}
            </BaseButton>
        </div>
    );
}

export default ProgressButton;