import React from 'react';
import Radiobuttons from './Radiobuttons';
import { range } from '../utils';
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import ProgressButton from './ProgressButton';

const Taste = ({ data }) => {
const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
const {type, taste, setTaste} = React.useContext(TypeTasteTextureContext);
const availableTastes = [...new Set(data.filter((snack) => snack.type === type).map((snack) => snack.taste))];
   
    React.useEffect(() => {
        if (taste === '') {
        setShowProgressButton(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <h2>Now, pick a taste</h2>    
            {range(availableTastes.length).map((num) => (
                <Radiobuttons
                    label={`${availableTastes[num]}`}
                    name="TasteChoice"
                    id={`${availableTastes[num]}`}
                    key={`${availableTastes[num]}`}
                    value={availableTastes[num]}
                    checked={taste === availableTastes[num]}
                    onChange={(event) => {
                        setTaste(event.target.value);
                        setShowProgressButton(true);
                    }}
                    handleKeyDown={handleKeyDown(availableTastes[num])}>
                    {availableTastes[num]}
                </Radiobuttons>
            ))}
        </div>
        {showProgressButton && <ProgressButton currentAnswer={taste} questionID="2" />}
        </>
    );
}

export default Taste;