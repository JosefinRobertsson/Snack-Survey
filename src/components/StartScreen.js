import React from 'react';
import ProgressButton from './ProgressButton';


const StartScreen = () => {

    return (
        <div className="content-container">
            <h1>Survey by <span className="capital-letter">Y</span>our<span className="capital-letter">C</span>orner<span 
            className="capital-letter">S</span>tore</h1>
            <p>Welcome! You've reached a survey by YourCornerStore. We are about to expand our snacks assortment and we want to know what you'd like to see on our shelves. Please take a few minutes to fill out our survey.</p>
            <p id="start-quote">- YourCornerStore  - your friend in snacking</p>
            <div  className="button-container">
            <ProgressButton hideButton={true} 
            questionID="0" />
            </div>
        </div>
    );
}

export default StartScreen;