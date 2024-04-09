import React from 'react';
import ProgressButton from './ProgressButton';


const StartScreen = () => {

    return (
        <div className="content-container">
            <h1>The <span className="capital-letter">S</span>nack<span className="capital-letter">S</span>urvey</h1>
            <p>Welcome! You've reached a &#40;mock&#41; survey by YourCornerStore. We are about to expand our snacks assortment and we want to know what you'd like to see on our shelves. Please take a few minutes to fill out our survey.</p>
            <p className="store-quote">- YourCornerStore  - your 24/7 friend in snacking</p>
            <div className="button-container">
                <ProgressButton hideButton={true}
                    questionID="0" />
            </div>
        </div>

    );
}

export default StartScreen;