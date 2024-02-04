import React from "react";

export const ProgressContext = React.createContext();

const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = React.useState(0);
    const [showProgressButton, setShowProgressButton] = React.useState(false);


    return (
        <ProgressContext.Provider value={{ progress, setProgress, showProgressButton, setShowProgressButton,  }}>
            {children}
        </ProgressContext.Provider>
    );
}

export default ProgressProvider;