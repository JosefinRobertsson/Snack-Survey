import React from 'react';
import { StyledProgressBar } from '../styles/progress-bar.styles';
import { ProgressContext } from './ProgressProvider';

const ProgressBar = ({ ProgressBarID }) => {
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
        console.log('directionValue in func:', directionValue);
        console.log('isIncreasing in func:', isIncreasing);
        if (isIncreasing) {
            console.log('INCREASED');
            return totalLength * (1 - directionValue / 7);
        } else {
            console.log('DECREASED');
            //2 värden och animation, men från full bar
            //return totalLength - (totalLength * (1 - directionValue / 7));
            //2 värdeb och animation, men från start på senaste steg
            //return totalLength * (1 - directionValue / 7);
            return totalLength * (1 - (directionValue + 1) / 7);
        }
    };
/*
    const calculateDashoffset = (directionValue) => {
        const totalLength = 274; // Total length of the stroke-dasharray
        console.log('directionValue:', directionValue);
        console.log('isIncreasing in func:', isIncreasing);
        if (isIncreasing) {
            console.log('progress increased ');
            return totalLength * (1 - directionValue / 7);
        } else {
            console.log('progress decreased ');
            return totalLength - (totalLength * (1 - directionValue / 7));
            //return totalLength * (1 + progress / 7);
        }
    };
    */
      
    console.log('ProgressBarID:', ProgressBarID);
    console.log('progress:', progress);
    console.log('prevProgress:', prevProgress);

    // Determine if progress is increasing or decreasing
    //const isIncreasing = progress > ProgressBarID;
    console.log('isIncreasing:', isIncreasing);
    const from = calculateDashoffset(isIncreasing ? ProgressBarID : progress);
    console.log('from:', from);
    
    const to = calculateDashoffset(isIncreasing ? progress : ProgressBarID);
    console.log('to:', to);
    


    /*
    const from = isIncreasing ? calculateDashoffset(ProgressBarID) :  calculateDashoffset(progress);
    
    const to = isIncreasing ? calculateDashoffset(progress) : calculateDashoffset(ProgressBarID);
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
