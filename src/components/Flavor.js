import React from 'react';
import Checkboxes from './Checkboxes';
import ProgressButton from './ProgressButton';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { ProgressContext } from './ProgressProvider';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import useCheckboxChange from '../hooks/useCheckboxChange.hook';

const Flavor = ({ data }) => {
    const { flavor } = React.useContext(CheckboxChoiceContext);
    const { type, taste, texture } = React.useContext(TypeTasteTextureContext);
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);

    //Filter snackbase(data) to include only the flavors from the chosen type, taste, and texture snacks. Map each snack to get its flavors, then flatten the nested arrays of flavors into a single array. Use new Set to remove duplicate flavors, then spread the Set back into an array.
    const availableFlavors = [...new Set(data
        .filter((snack) => snack.type === type && snack.taste === taste && snack.texture === texture)
        .map((snack) => snack.flavor)
        .flat())];

    React.useEffect(() => {
        if (flavor.length === 0) {
            setShowProgressButton(false);
        } else {
            setShowProgressButton(true);
        }
    }, [flavor, setShowProgressButton]);


    const { handleCheckboxChange, handleCheckboxKeyDown } = useCheckboxChange('4');


    return (
        <>
        <h2>Choose your flavors</h2>
            <div className="flavor-container option-container">
                {availableFlavors.map((flavorValue) => (
                    <Checkboxes
                        label={`${flavorValue}`}
                        id={`${flavorValue}`}
                        key={`${flavorValue}`}
                        value={flavorValue}
                        checked={flavor.includes(flavorValue)}
                        onChange={(event) => {
                            handleCheckboxChange(flavorValue, event.target.checked);
                        }}
                        onKeyDown={(event) => {
                            handleCheckboxKeyDown(flavorValue, flavor.includes(flavorValue), event);

                        }}
                    >
                        {flavorValue}
                    </Checkboxes>
                ))}
            </div>
            <div className="button-container">
            {showProgressButton && <ProgressButton currentAnswer={flavor} questionID='4' />}
            </div>
        </>
    )
}

export default Flavor;