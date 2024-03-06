/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ProgressContext } from './ProgressProvider';
import ProgressButton from './ProgressButton';
import { SnackSuggestionContext } from './SnackSuggestionProvider';


const AddSuggestion = () => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
   const {suggestion, setSuggestion, dropdown, setDropdown} = React.useContext(SnackSuggestionContext);
    const [progressButtonName, setProgressButtonName] = React.useState('Next');
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        // Show/Hide the input field
        if (dropdown === 'yes') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    
        // Show/Hide the progress button
        if (dropdown === 'empty' || (dropdown === 'yes' && suggestion.length < 4)) {
            setShowProgressButton(false);
        } else {
            setShowProgressButton(true);
        }
    
        // Update progress button text
        if (dropdown === 'yes' && suggestion.length >= 4) {
            setProgressButtonName('Submit');
        } else if (dropdown === 'no') {
            setProgressButtonName('Next');
        }
    }, [dropdown, suggestion]);

    //prevent React from re-rendering the component on every keystroke by using useCallback
    const handleSuggestionChange = React.useCallback((event) => {
        setSuggestion(event.target.value);
    }, []);
    

    return (
        <>
            <h2>Add a suggestion</h2>
            <div className="suggestion-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    <label htmlFor="dropdown">Would you like to suggest a snack?</label>
                    <select id="dropdown" name="dropdown"
                        onChange={event => {
                            setDropdown(event.target.value);
                        }}>
                        <option value="empty" disabled selected></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {isVisible &&
                        <div>
                            <label htmlFor="suggestion">Suggestion:</label>
                            <input type="text" id="suggestion" name="suggestion" value={suggestion} min="4" max="40"
                               onChange={handleSuggestionChange}
                            />
                        </div>
                    }
                </form>
            </div>
            {showProgressButton &&
                <ProgressButton currentAnswer={suggestion} questionID="7" 
                    progressButtonName={progressButtonName} />
            }
        </>
    )
}

export default AddSuggestion;