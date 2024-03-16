import React from "react";

export const ProgressContext = React.createContext();

const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = React.useState(0);
    const [prevProgress, setPrevProgress] = React.useState(0);
    const [showProgressBar, setShowProgressBar] = React.useState(false);
    const [showProgressButton, setShowProgressButton] = React.useState(false);

    console.log('progress:', progress);
    console.log('prevProgress:', prevProgress);

    return (
        <ProgressContext.Provider value={{ progress, setProgress, prevProgress, setPrevProgress, showProgressBar, setShowProgressBar, showProgressButton, setShowProgressButton,  }}>
            {children}
        </ProgressContext.Provider>
    );
}

export default ProgressProvider;