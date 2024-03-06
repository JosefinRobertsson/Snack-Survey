import React from 'react';
import { CheckboxChoiceContext } from '../components/CheckboxChoiceProvider';


const useCheckboxChange = (questionID) => {

  const { setFlavor, setImportantCategories } = React.useContext(CheckboxChoiceContext);


  //get the correct state setter function based on the questionID
  const getSetterFunction = (id) => {
    switch (id) {
      case '4':
        return setFlavor;
      case '6':
        return setImportantCategories;
      default:
        return () => { }; // Default to an empty function if no matching identifier
    }
  };

  //add or remove the selected value from the previous values
  const handleCheckboxChange = (selectedValue, isChecked) => {
    console.log('Selected Value:', selectedValue, 'Is Checked:', isChecked);
    getSetterFunction(questionID)((prevValues) => {

      if (isChecked) {
        const updatedValues = [...prevValues, selectedValue];
        console.log('Updated Values (Checked):', updatedValues);
        return updatedValues;
      } else {
        const updatedValues = prevValues.filter((currentValue) => currentValue !== selectedValue);
        console.log('Updated Values (Unchecked):', updatedValues);
        return updatedValues;
      }
    });
  };

  const handleCheckboxKeyDown = (selectedValue, isChecked, event) => {
    if (event.key === 'Enter') {
      isChecked = !isChecked;
    handleCheckboxChange(selectedValue, isChecked);
    
  }
};


//return the functions to be used in the component
return { handleCheckboxChange, handleCheckboxKeyDown };
  };

export default useCheckboxChange;
