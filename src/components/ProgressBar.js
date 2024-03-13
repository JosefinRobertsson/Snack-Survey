import React from 'react';
import { StyledProgressBar } from '../styles/progress-bar.styles';
import { ProgressContext } from './ProgressProvider';

const ProgressBar = () => {
    const { progress } = React.useContext(ProgressContext);

    const calculateDashoffset = (progress) => {
        const totalLength = 274; // Total length of the stroke-dasharray
        return totalLength * (1 - progress / 7);
    };

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
                                strokeDashoffset="274"
                                strokeLinecap="round"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from={calculateDashoffset(progress - 1)}
                                    to={calculateDashoffset(progress)}
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
