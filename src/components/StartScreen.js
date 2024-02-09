import React from 'react';
import ProgressButton from './ProgressButton';


const StartScreen = () => {

    return (
        <div>
            <h1>Welcome to the Snack Survey</h1>
            <ProgressButton hideButton={true} questionID="0" />
        </div>
    );
}

export default StartScreen;