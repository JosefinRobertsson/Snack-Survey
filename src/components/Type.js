import React from "react";
import Radiobuttons from "./Radiobuttons";
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import ProgressButton from './ProgressButton';
import ProgressBar from "./ProgressBar";

const Type = ({ data }) => {
    const { showProgressBar, setShowProgressBar, showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const { type, setType } = React.useContext(TypeTasteTextureContext);
    //use Set to store unique values
    const uniqueTypes = [...new Set(data.map((snack) => snack.type))];
    console.log('uniqueTypes:', uniqueTypes);

    //This check is nececcary since the user can go back to previous questions and change their answers. We want to show the progress button only when there is a valid answer
    React.useEffect(() => {
        if (type === '') {
            setShowProgressButton(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (type !== '' && showProgressButton) {
            setShowProgressBar(true);
        }
    }, [type, showProgressButton, setShowProgressBar]);

    const handleKeyDown = (selectedType) => (e) => {
        if (e.key === 'Enter') {
            setType(selectedType);
            setShowProgressButton(true);
        }
    };
    return (
        <div className="content-container">
            <h2>Which one of these do you like best?</h2>
            <div className="type-container option-container">
                {uniqueTypes.map((typeValue) => (
                    <Radiobuttons
                        name="TypeChoice"
                        id={typeValue}
                        key={typeValue}
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
            {showProgressBar &&
                    <ProgressBar previousStep={0} />}
            <div className="button-container">
                {showProgressButton &&
                    <ProgressButton currentAnswer={type} questionID="1" backButtonName="Start over" />}
            </div>
        </div>
    );
}

export default Type;