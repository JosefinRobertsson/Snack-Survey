import React from 'react';
import { StyledProgressBar } from '../styles/progress-bar.styles';
import { ProgressContext } from './ProgressProvider';

const ProgressBar = ({ previousStep }) => {
    const { progress, prevProgress } = React.useContext(ProgressContext);
    const [isIncreasing, setIsIncreasing] = React.useState(false);
    const [from, setFrom] = React.useState(0);
    const [to, setTo] = React.useState(0);
    const [latestStep, setLatestStep] = React.useState(0);

    React.useEffect(() => {
        if (progress < prevProgress) {
            setIsIncreasing(false);
        } else {
            setIsIncreasing(true);
        }
        setLatestStep(progress);
        console.log('isIncreasing updated:');
    }, [progress, prevProgress]);


    // Define calculateDashoffset inside useEffect to ensure it gets the latest isIncreasing value
    React.useEffect(() => {
        const calculateDashoffset = (directionValue) => {
            const totalLength = 274; // Total length of the stroke-dasharray
            console.log('directionValue:', directionValue);
            if (isIncreasing) { 
                return totalLength * (1 - directionValue / 7);
            } else {
                return totalLength * (1 - (directionValue + 1) / 7);
            }
        };


         // Update state with new values
         setFrom(_prevFrom => calculateDashoffset(isIncreasing ? previousStep : latestStep));
         setTo(_prevTo => calculateDashoffset(isIncreasing ? latestStep : previousStep));
         
    }, [isIncreasing, previousStep, latestStep]);
    console.log('from:', from);
    console.log('to:', to);
    
    return (
        <div className="progress-wrapper">
            <div className="progress-container">
                <StyledProgressBar className="progress-bar">
                    <div className="progress-outer">
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient-color"
                                x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="20%" stopColor="#EE82EE" />
                                    <stop offset="90%" stopColor="#800080" 
                                    />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="49%"
                                cy="49%"
                                r="44%"
                                transform="rotate(-90 50 50)"
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
                                    dur="0.5s"
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

export default React.memo(ProgressBar);
