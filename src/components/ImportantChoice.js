import React from 'react';
import Checkboxes from './Checkboxes';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import ProgressButton from './ProgressButton';

const ImportantChoice = () => {
    const categories = ['Vegan', 'Sugar-free', 'Organic', 'High-protein']
    const { importantCategories, setImportantCategories } = React.useContext(CheckboxChoiceContext);
    
    const handleCategoryChange = (selectedCategory, isChecked) => {
        setImportantCategories((prevCategories) => {
            if (isChecked) {
                return [...prevCategories, selectedCategory];
            } else {
                return prevCategories.filter((category) => category !== selectedCategory);
            }
        });
    }

    const handleKeyDown = (selectedCategory) => (e) => {
        if (e.key === 'Enter') {
            handleCategoryChange(selectedCategory, !importantCategories.includes(selectedCategory));
        }
    }

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
                    handleCategoryChange(categoryValue, event.target.checked);
                }}
                handleKeyDown={handleKeyDown(categoryValue)}
            >
                {categoryValue}
            </Checkboxes>
        ))}
        <ProgressButton currentAnswer={importantCategories} questionID="6" />
        </>
    );
}

export default ImportantChoice;