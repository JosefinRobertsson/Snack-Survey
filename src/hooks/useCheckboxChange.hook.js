import React from 'react';
import { CheckboxChoiceContext } from '../components/CheckboxChoiceProvider';


const useCheckboxChange = ( questionID ) => {

    const { setFlavor, setImportantCategories } = React.useContext(CheckboxChoiceContext);


    //get the correct state setter function based on the questionID
    const getSetterFunction = (id) => {
      switch (id) {
        case '4':
          return setFlavor;
        case '6':
          return setImportantCategories;
        default:
          return () => {}; // Default to an empty function if no matching identifier
      }
    };

    //add or remove the selected value from the previous values
    const handleCheckboxChange = (selectedValue, isChecked) => {
      getSetterFunction(questionID)((prevValues) => {
        
        if (isChecked) {
          return [...prevValues, selectedValue];
        } else {
          return prevValues.filter((currentValue) => currentValue !== selectedValue);
        }
      });

    };
  
    const handleCheckboxKeyDown = (selectedValue, isChecked) => (e) => {
      if (e.key === 'Enter') {
        handleCheckboxChange(selectedValue, isChecked);
      }
    };
  
  //return the functions to be used in the component
    return { handleCheckboxChange, handleCheckboxKeyDown };
  };
  
  export default useCheckboxChange;
