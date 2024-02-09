import React from 'react';

export const FlavorContext = React.createContext();

const FlavorProvider = ({ children }) => {
    const [flavor, setFlavor] = React.useState([]);

    return (
        <FlavorContext.Provider value={{ flavor, setFlavor }}>
            {children}
        </FlavorContext.Provider>
    );
}

export default FlavorProvider;
