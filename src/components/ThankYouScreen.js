import React from 'react';
import { RetakeSurveyButton } from '../styles/buttons.styles';
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';


const ThankYouScreen = () => {
    const {setProgress} = React.useContext(ProgressContext);
    const {type, taste, texture} = React.useContext(TypeTasteTextureContext);

    const handleRestartClick = () => {
        setProgress(0);
    }

    return (
        <>
        <div className="thankyou-wrapper">
        <div className="content-container thankyou-container">
            <h1>Thank you for taking our survey!</h1>
            <p>Your answers have been submitted. We appreciate your time and feedback and we hope to see you soon!</p> 
            <p className="store-quote">YourCornerStore - your 24/7 friend in snacking</p>
        </div>
         <div className="button-container lastpage-container">
         <span>
         <RetakeSurveyButton id="lastrestartBtn" onClick={() => handleRestartClick()}>Retake survey</RetakeSurveyButton>
         </span>
         <a id="snacks-link" href={`https://www.google.com/search?q=${taste}+${texture}+${type}+snacks`} target="_blank" rel="noopener noreferrer">Show me snacks!</a>
         </div>
         </div>
         <footer>
            <p>snack icons from <a href="https://smashicons.com/" target="_blank" rel="noopener noreferrer">smashicons</a>, <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">freepik</a></p>
            </footer>
            </>
    );
}

export default ThankYouScreen;