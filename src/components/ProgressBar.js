import React from 'react';
import { StyledProgressBar } from '../styles/progress-bar.styles';
import { ProgressContext } from './ProgressProvider';

const ProgressBar = ({ previousStep }) => {
    const { progress, prevProgress } = React.useContext(ProgressContext);
    const [isIncreasing, setIsIncreasing] = React.useState(null);
    const [from, setFrom] = React.useState(null);
    const [to, setTo] = React.useState(null);
    const [latestStep, setLatestStep] = React.useState(0);

    React.useEffect(() => {
        if (progress < prevProgress) {
            setIsIncreasing(false);
        } else {
            setIsIncreasing(true);
        }
        setLatestStep(progress);
    }, [progress, prevProgress]);

    const calculateDashoffset = (directionValue) => {
        const totalLength = 284; // Total length of the stroke-dasharray
        if (isIncreasing) {
            return totalLength * (1 - directionValue / 7);
        } else {
            return totalLength * (1 - (directionValue + 1) / 7);
        }
    };

    React.useEffect(() => {
        // Calculate from and to when progress and isIncreasing are set. They are initialized as null. This useEffect will run when they are set, to prevent an unnecessary extra render when they are still null, which they are every time the parent component changes.
        if (progress !== null && isIncreasing !== null) {
            const newFrom = calculateDashoffset(isIncreasing ? previousStep : latestStep);
            const newTo = calculateDashoffset(isIncreasing ? latestStep : previousStep);
            setFrom(newFrom);
            setTo(newTo);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress, isIncreasing, previousStep, latestStep]);

    // Render null if any state values are still null
    if (from === null || to === null || isIncreasing === null) {
        return null;
    }

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
                                cx="50%"
                                cy="50%"
                                r="42%"
                                transform="rotate(-90 50 50)"
                                fill="none"
                                stroke="url(#gradient-color)"
                                strokeWidth="16px"
                                strokeDasharray="284"
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
