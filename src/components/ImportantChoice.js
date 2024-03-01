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
                onKeyDown={handleCheckboxKeyDown(categoryValue)}
            >
                {categoryValue}
            </Checkboxes>
        ))}
        <ProgressButton currentAnswer={importantCategories} questionID="6" />
        </>
    );
}

export default ImportantChoice;