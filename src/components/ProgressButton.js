import React from 'react';

const ProgressButton = ({ progress, setProgress }) => {

    const handleClick = () => {
        setProgress(progress + 1);
    }
    
    return (
        <button onClick={handleClick}>Next</button>
    );
    }

export default ProgressButton;