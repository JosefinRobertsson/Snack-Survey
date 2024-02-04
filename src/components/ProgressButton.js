import React from 'react';
import { ProgressContext } from './ProgressProvider';

const ProgressButton = ({ hideButton }) => {
    const { progress, setProgress } = React.useContext(ProgressContext);
const backBtnClass = hideButton ? 'hiddenBtn' : '';

    const handleProgressClick = (id) => {
        if (id === "nextBtn") {
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