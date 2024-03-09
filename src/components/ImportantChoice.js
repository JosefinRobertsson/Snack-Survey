import React from 'react';
import Checkboxes from './Checkboxes';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import ProgressButton from './ProgressButton';
import useCheckboxChange from '../hooks/useCheckboxChange.hook';

const ImportantChoice = () => {
    const categories = ['Vegan', 'Sugar-free', 'Organic', 'High-protein']
    const { importantCategories } = React.useContext(CheckboxChoiceContext);
    
    const { handleCheckboxChange, handleCheckboxKeyDown } = useCheckboxChange('6');

    return (
        <>
        <h2>Would you like to see more of any of these types of snacks at LocalMart?</h2>
        <div className="important-container option-container">
        {categories.map((categoryValue) => (
            <Checkboxes 
                label={categoryValue}
                id={categoryValue}
                key={categoryValue}
                value={categoryValue}
                checked={importantCategories.includes(categoryValue)}
                onChange={(event) => {
                    handleCheckboxChange(categoryValue, event.target.checked);
                }}
                onKeyDown={(event) => {
                    handleCheckboxKeyDown(categoryValue, importantCategories.includes(categoryValue), event);
                }}
            >
                {categoryValue}
            </Checkboxes>
        ))}
        </div>
        <div className="button-container">
        <ProgressButton currentAnswer={importantCategories} questionID="6" />
        </div>
        </>
    );
}

export default ImportantChoice;