import React from "react";
import Radiobuttons from "./Radiobuttons";
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import ProgressButton from './ProgressButton';

const Type = ({ data }) => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const { type, setType } = React.useContext(TypeTasteTextureContext);
    //use Set to store unique values
    const uniqueTypes = [...new Set(data.map((snack) => snack.type))];

    React.useEffect(() => {
        if (type === '') {
            setShowProgressButton(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        console.log('type:', type);
    }, [type]);

    const handleKeyDown = (selectedType) => (e) => {
        if (e.key === 'Enter') {
            setType(selectedType);
            setShowProgressButton(true);
        }
    };
    return (
        <>
        <h2>What type of snack do you think we need more of?</h2>
            <div className="type-container option-container">
                {uniqueTypes.map((typeValue) => (
                    <Radiobuttons
                        label={`${typeValue}`}
                        name="TypeChoice"
                        id={`${typeValue}`}
                        key={`${typeValue}`}
                        value={typeValue}
                        checked={type === typeValue}
                        onChange={(event) => {
                            setType(event.target.value);
                            setShowProgressButton(true);
                        }}
                        handleKeyDown={handleKeyDown(typeValue)}>
                        {typeValue}
                    </Radiobuttons>
                ))}

            </div>
            <div  className="button-container">
            {showProgressButton && <ProgressButton currentAnswer={type} questionID="1" />}
            </div>
        </>
    );
}

export default Type;