import React from "react";
import Radiobuttons from "./Radiobuttons";
import { range } from "../utils";
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import ProgressButton from './ProgressButton';

const Type = ({ data }) => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const { type, setType } = React.useContext(TypeTasteTextureContext);

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
        <div className="typeGroup-container">
            <h2>What type of snack do you think we need more of?</h2>
            {range(uniqueTypes.length).map((num) => (
                <Radiobuttons
                    label={`${uniqueTypes[num]}`}
                    name="TypeChoice"
                    id={`${uniqueTypes[num]}`}
                    key={`${uniqueTypes[num]}`}
                    value={uniqueTypes[num]}
                    checked={type === uniqueTypes[num]}
                    onChange={(event) => {
                        setType(event.target.value);
                        setShowProgressButton(true);
                        console.log('type in onchange:', type);
                    }}
                    handleKeyDown={handleKeyDown(uniqueTypes[num])}>
                    {uniqueTypes[num]}
                </Radiobuttons>
            ))}
        </div>
            {showProgressButton && <ProgressButton  currentAnswer={type} questionID="1"  />}
        </>
    );
}

export default Type;