import React from 'react';

export const SnackSuggestionContext = React.createContext();

const SnackSuggestionProvider = ({ children }) => {
    const [suggestion, setSuggestion] = React.useState('');
    const [dropdown, setDropdown] = React.useState('empty');

    return (
        <SnackSuggestionContext.Provider value={{ suggestion, setSuggestion, dropdown, setDropdown }}>
            {children}
        </SnackSuggestionContext.Provider>
    );
}

export default SnackSuggestionProvider;