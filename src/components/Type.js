import React from "react";
import Radiobuttons from "./Radiobuttons";
import { range } from "../utils";

const Type = ({ data, taste, type, setType }) => {

    const availableTypes = [...new Set(data.filter((snack) => snack.taste === taste).map((snack) => snack.type))];
    console.log(availableTypes);

    const handleKeyDown = (selectedType) => (e) => {
        if (e.key === 'Enter') {
            setType(selectedType);
        }
    };
    return (
        <div className="typeGroup-container">
            <h2>What type of snack would you prefer?</h2>
            {range(availableTypes.length).map((num) => (
                <Radiobuttons
                    label={`${availableTypes[num]}`}
                    name="TypeChoice"
                    id={`${availableTypes[num]}`}
                    value={availableTypes[num]}
                    checked={type === availableTypes[num]}
                    onChange={(event) => {
                        setType(event.target.value);
                    }}
                    handleKeyDown={handleKeyDown(availableTypes[num])}>
                    {availableTypes[num]}
                </Radiobuttons>
            ))}
        </div>
    );
}

export default Type;