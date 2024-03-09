import React from 'react';
import ProgressButton from './ProgressButton';


const StartScreen = () => {

    return (
        <>
            <h1>Survey by YourCornerStore</h1>
            <p>Welcome! You've reached a survey by YourCornerStore. We are about to expand our snacks assortment and we want to know what you'd like to see on our shelves. Please take a few minutes to fill out our survey.</p>
            <p>-Always open, always peckish. YourCornerStore</p>
            <div  className="button-container">
            <ProgressButton hideButton={true} 
            questionID="0" />
            </div>
        </>
    );
}

export default StartScreen;