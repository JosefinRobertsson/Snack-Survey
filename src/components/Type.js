import React from "react";
import Radiobuttons from "./Radiobuttons";
import { range } from "../utils";
import { ProgressContext } from './ProgressProvider';
import ProgressButton from './ProgressButton';

const Type = ({ data, taste, type, setType }) => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const availableTypes = [...new Set(data.filter((snack) => snack.taste === taste).map((snack) => snack.type))];

    React.useEffect(() => {
        setShowProgressButton(false);
    }, []);

    const handleKeyDown = (selectedType) => (e) => {
        if (e.key === 'Enter') {
            setType(selectedType);
            setShowProgressButton(true);
        }
    };
    return (
        <>
        <div className="typeGroup-container">
            <h2>What type of snack would you prefer?</h2>
            {range(availableTypes.length).map((num) => (
                <Radiobuttons
                    label={`${availableTypes[num]}`}
                    name="TypeChoice"
                    id={`${availableTypes[num]}`}
                    key={`${availableTypes[num]}`}
                    value={availableTypes[num]}
                    checked={type === availableTypes[num]}
                    onChange={(event) => {
                        setType(event.target.value);
                        setShowProgressButton(true);
                    }}
                    handleKeyDown={handleKeyDown(availableTypes[num])}>
                    {availableTypes[num]}
                </Radiobuttons>
            ))}
        </div>
            {showProgressButton && <ProgressButton />}
        </>
    );
}

export default Type;