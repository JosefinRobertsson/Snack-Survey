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
    }  
    
    React.useEffect(() => {
        console.log('formData:', formData);
    }, [formData]);

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