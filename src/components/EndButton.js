import React from 'react';
import { resetAnswers } from '../helpers/reset-state.helpers';
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import { PriceContext } from './PriceProvider';
import { SnackSuggestionContext } from './SnackSuggestionProvider';
import { BaseButton, SubmitResultsButton } from '../styles/buttons.styles';

const EndButton = (questionID) => {
    const { setProgress } = React.useContext(ProgressContext);
    // formData is an object with the gathered data that would be sent to wherever the survey results are handled if it were a real survey
    // eslint-disable-next-line no-unused-vars
    const [formData, setFormData] = React.useState({ type: '', taste: '', texture: '', flavor: [], price: '', importantCategories: [], suggestion: ''});
    const { type, taste, texture } = React.useContext(TypeTasteTextureContext);
    const { flavor, importantCategories } = React.useContext(CheckboxChoiceContext);
    const { price } = React.useContext(PriceContext);
    const { suggestion } = React.useContext(SnackSuggestionContext);

const handleBackClick = () => {
        resetAnswers(questionID);
        setProgress(0);
    }

    const handleSubmit = () => {
        const newFormData = {
            type: type,
            taste: taste,
            texture: texture,
            flavor: flavor,
            price: `€${price}`,
            importantCategories: importantCategories,
            suggestion: suggestion
        }
        setFormData(newFormData);
        resetAnswers(questionID);
        setProgress(9);
    }  
    
    return (
        <>
         <BaseButton id="restartBtn"
         onClick={() => handleBackClick()}>{'<<'} Start over</BaseButton>
        <SubmitResultsButton id="endBtn"
        onClick={() => handleSubmit()}>Submit answers</SubmitResultsButton>
        </>
    );
}

export default EndButton;