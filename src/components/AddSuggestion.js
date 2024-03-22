/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ProgressContext } from './ProgressProvider';
import ProgressButton from './ProgressButton';
import { SnackSuggestionContext } from './SnackSuggestionProvider';
import { StyledSelect } from '../styles/dropdown.styles';
import ProgressBar from './ProgressBar';


const AddSuggestion = () => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const { suggestion, setSuggestion, dropdown, setDropdown } = React.useContext(SnackSuggestionContext);
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
            setProgressButtonName('Submit >');
        } else if (dropdown === 'no') {
            setProgressButtonName('Next >');
        }
    }, [dropdown, suggestion]);

    //prevent React from re-rendering the component on every keystroke by using useCallback
    const handleSuggestionChange = React.useCallback((event) => {
        setSuggestion(event.target.value);
    }, []);


    return (
        <>
            <h2>Add a suggestion</h2>
            <div className="suggestion-container option-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    <label htmlFor="dropdown">Would you like to suggest a snack?</label>
                    <StyledSelect
                        id="dropdown"
                        className="styledSelect"
                        name="dropdown"
                        value="empty"
                        onChange={(event) => {
                            setDropdown(event.target.value);
                        }}
                    >
                        <option value="empty" disabled ></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </StyledSelect>
                    <div className="input-container">
                        {isVisible &&
                            <div className="input-inner">
                                <label htmlFor="suggestion">Suggestion: </label>
                                <span>
                                <span className={suggestion.length >= 0 && suggestion.length <=3 ? "grey-text" : ""}>{suggestion.length}</span>/50</span>
                                <input 
                                type="text" 
                                id="suggestion" 
                                name="suggestion" 
                                value={suggestion} 
                                min="4" 
                                maxLength={50}
                                    onChange={handleSuggestionChange}
                                />
                            </div>
                        }
            </div>

        </form >
            </div >
    { showProgressButton &&
    <ProgressBar previousStep={6} />}
<div className="button-container">
    {showProgressButton &&
        <ProgressButton currentAnswer={suggestion} questionID="7"
            progressButtonName={progressButtonName} />
    }
</div>
        </>
    )
}

export default AddSuggestion;