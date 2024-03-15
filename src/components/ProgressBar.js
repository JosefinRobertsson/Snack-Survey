import React from 'react';
import { StyledProgressBar } from '../styles/progress-bar.styles';
import { ProgressContext } from './ProgressProvider';

const ProgressBar = ({ previousStep }) => {
    const { progress, prevProgress } = React.useContext(ProgressContext);
    const [isIncreasing, setIsIncreasing] = React.useState(false);

    React.useEffect(() => {
        if (progress < prevProgress) {
            setIsIncreasing(false);
        } else {
        setIsIncreasing(true);
        }
    }, [progress, prevProgress]);


    const calculateDashoffset = (directionValue) => {
        const totalLength = 274; // Total length of the stroke-dasharray
        if (isIncreasing) {
            return totalLength * (1 - directionValue / 7);
        } else {
            return totalLength * (1 - (directionValue + 1) / 7);
        }
    };
      
    // Call calculateDashoffset with the correct values depending on whether the progress is increasing or decreasing
    const from = calculateDashoffset(isIncreasing ? previousStep : progress);
    console.log('from:', from);
    
    const to = calculateDashoffset(isIncreasing ? progress : previousStep);
    console.log('to:', to);
    


    /*
    const from = isIncreasing ? calculateDashoffset(previousStep) :  calculateDashoffset(progress);
    
    const to = isIncreasing ? calculateDashoffset(progress) : calculateDashoffset(previousStep);
    */

    return (
        <div className="progress-wrapper">
            <div className="progress-container">
                <StyledProgressBar className="progress-bar">
                    <div className="progress-outer">
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient-color">
                                    <stop offset="0%" stopColor="#EE82EE" />
                                    <stop offset="100%" stopColor="#800080" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="49%"
                                cy="49%"
                                r="44%"
                                fill="none"
                                stroke="url(#gradient-color)"
                                strokeWidth="10px"
                                strokeDasharray="274"
                                strokeDashoffset={from} // Reverse animation if decreasing
                                strokeLinecap="round"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from={from} // Set from value accordingly
                                    to={to} // Set to value accordingly
                                    dur="1s"
                                    fill="freeze"
                                />
                            </circle>
                        </svg>

                        <div className="progress-inner">
                            <div id="progress-display">
                                {progress}/7
                            </div>
                        </div>
                    </div>
                </StyledProgressBar>
            </div>
        </div>
    );
}

export default ProgressBar;
