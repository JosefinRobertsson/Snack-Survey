import React from 'react';
import { resetAnswers } from '../helpers/reset-state.helpers';
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import { PriceContext } from './PriceProvider';
import { SnackSuggestionContext } from './SnackSuggestionProvider';

const EndButton = (questionID) => {
    const { setProgress } = React.useContext(ProgressContext);
    const [formData, setFormData] = React.useState({});
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
        console.log('formData:', newFormData);
    }       

    return (
        <>
         <button id="restartBtn"
         onClick={() => handleBackClick()}>Start over</button>
        <button id="endBtn"
        onClick={() => handleSubmit()}>Submit answers</button>
        </>
    );
}

export default EndButton;