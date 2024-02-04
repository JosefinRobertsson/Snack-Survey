import React from 'react';
import Radiobuttons from './Radiobuttons';
import { range } from '../utils';
import { ProgressContext } from './ProgressProvider';
import ProgressButton from './ProgressButton';

const Taste = ({ data, taste, setTaste }) => {
const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const uniqueTaste = [...new Set(data.map((snack) => snack.taste))];
   
    React.useEffect(() => {
        setShowProgressButton(false);
    }, []);

    //arrow function chaining ("currying") defines a function that takes selectedTaste as a parameter and returns another function that takes an event as a parameter
    const handleKeyDown = (selectedTaste) => (e) => {
        if (e.key === 'Enter') {
            setTaste(selectedTaste);
            setShowProgressButton(true);
        }
    };
    
    return (
        <>
        <div className="tasteGroup-container">
            <h2>First, pick a taste</h2>    
            {range(uniqueTaste.length).map((num) => (
                <Radiobuttons
                    label={`${uniqueTaste[num]}`}
                    name="TasteChoice"
                    id={`${uniqueTaste[num]}`}
                    key={`${uniqueTaste[num]}`}
                    value={uniqueTaste[num]}
                    checked={taste === uniqueTaste[num]}
                    onChange={(event) => {
                        setTaste(event.target.value);
                        setShowProgressButton(true);
                    }}
                    handleKeyDown={handleKeyDown(uniqueTaste[num])}>
                    {uniqueTaste[num]}
                </Radiobuttons>
            ))}
        </div>
        {showProgressButton && <ProgressButton />}
        </>
    );
}

export default Taste;