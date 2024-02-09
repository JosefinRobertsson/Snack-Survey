import React from 'react';

export const CheckboxChoiceContext = React.createContext();

const CheckboxChoiceProvider = ({ children }) => {
    const [flavor, setFlavor] = React.useState([]);
    const [importantCategories, setImportantCategories] = React.useState([]);

    return (
        <CheckboxChoiceContext.Provider value={{ flavor, setFlavor, importantCategories, setImportantCategories }}>
            {children}
        </CheckboxChoiceContext.Provider>
    );
}

export default CheckboxChoiceProvider;
