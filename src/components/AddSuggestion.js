import React from 'react';
import { ProgressContext } from './ProgressProvider';
import ProgressButton from './ProgressButton';


const AddSuggestion = () => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const [suggestion, setSuggestion] = React.useState('');
    const [dropdown, setDropdown] = React.useState('empty');
    const [progressButtonName, setProgressButtonName] = React.useState('Next');
    const [isVisible, setIsVisible] = React.useState(false);

    // Show the progress-button after the user has chosen 'no' or after the user has chosen 'yes' and entered at least 4 characters in the input field
    React.useEffect(() => {
        if (dropdown === 'empty' || (dropdown === 'yes' && (suggestion.length < 4))) {
            setShowProgressButton(false);
        } else {
            setShowProgressButton(true);
        }
    }, [dropdown, suggestion]);

    // Decide the text on the progress-button depending on wether the user wants to add a suggestion or not
    React.useEffect(() => {
        if (dropdown === 'yes' && (suggestion.length >= 4)) {
            setProgressButtonName('Submit');
        } else if (dropdown === 'no') {
            setProgressButtonName('Next');
        }
    }, [dropdown, suggestion]);

    // Show the input field if the user wants to add a suggestion
    React.useEffect(() => {
        if (dropdown === 'yes') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [dropdown]);

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
                        <option value="empty"></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {isVisible &&
                        <div>
                            <label htmlFor="suggestion">Suggestion:</label>
                            <input type="text" id="suggestion" name="suggestion" value={suggestion} min="4" max="40"
                                onChange={event => {
                                    setSuggestion(event.target.value)
                                }}
                            />
                        </div>
                    }
                </form>
            </div>
            {showProgressButton &&
                <ProgressButton currentAnswer={suggestion} questionID="7" setSuggestion={setSuggestion}
                    progressButtonName={progressButtonName} />
            }
        </>
    )
}

export default AddSuggestion;