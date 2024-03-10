import React from 'react';
import { StyledProgressBar } from '../styles/progress-bar.styles';
import { ProgressContext } from './ProgressProvider';

const ProgressBar = () => {
    const { progress } = React.useContext(ProgressContext);

    return (
        <div className="progress-wrapper">
        <div className="progress-container">
            <StyledProgressBar className="progress-bar">
                <div className="progress-outer">
                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradient-color">
                                <stop offset="0%" stop-color="#EE82EE" />
                                <stop offset="100%" stop-color="#800080" />
                            </linearGradient>
                        </defs>
                        <circle cx="49%" cy="49%" r="44%" stroke-linecap="round" />
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