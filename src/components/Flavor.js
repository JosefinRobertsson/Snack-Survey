import React from 'react';
import Checkboxes from './Checkboxes';
import ProgressButton from './ProgressButton';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { ProgressContext } from './ProgressProvider';
import { FlavorContext } from './FlavorProvider';

const Flavor = ({ data }) => {
    const { flavor, setFlavor } = React.useContext(FlavorContext);
    const { type, taste, texture } = React.useContext(TypeTasteTextureContext);
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);

    const availableFlavors = [...new Set(data.filter((snack) => snack.type === type && snack.taste === taste && snack.texture === texture).map((snack) => snack.flavor).flat())];
   
    React.useEffect(() => {
        if (flavor.length === 0) {
            setShowProgressButton(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFlavorChange = (selectedFlavor, isChecked) => {
        setFlavor((prevFlavors) => {
            if (isChecked) {
                return [...prevFlavors, selectedFlavor];
            } else {
                //filter creates a new array with all the flavors that don't match the selectedFlavor that was unchecked
                return prevFlavors.filter((flavor) => flavor !== selectedFlavor);
            }
        });
        console.log('flavor:', flavor);

        setShowProgressButton(true);
    }


const handleKeyDown = (selectedFlavor) => (e) => {
    if (e.key === 'Enter') {
        handleFlavorChange(selectedFlavor, !flavor.includes(selectedFlavor));
    }
};

return (
    <>
        <div className="flavorGroup-container">
            <h2>Choose your flavors</h2>
            {availableFlavors.map((flavorValue) => (

                    <Checkboxes
                        label={`${flavorValue}`}
                        id={`${flavorValue}`}
                        key={`${flavorValue}`}
                        value={flavorValue}
                        checked={flavor.includes(flavorValue)}
                        onChange={(event) => {
                            handleFlavorChange(flavorValue, event.target.checked);
                        }}
                        handleKeyDown={handleKeyDown(flavorValue)}
                    >
                        {flavorValue}
                    </Checkboxes>
                ))}
        </div>
        {showProgressButton && <ProgressButton currentAnswer={flavor} questionID="4" />}
    </>
)
}

export default Flavor;