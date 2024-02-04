import React from 'react';
import ProgressButton from './ProgressButton';


const StartScreen = () => {
    const hideBackButton = true;

    return (
        <div>
            <h1>Welcome to the Snack Survey</h1>
            <ProgressButton hideButton={hideBackButton} />
        </div>
    );
}

export default StartScreen;