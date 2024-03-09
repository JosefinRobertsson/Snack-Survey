import React from 'react';
import Radiobuttons from './Radiobuttons';
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import ProgressButton from './ProgressButton';

const Taste = ({ data }) => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const { type, taste, setTaste } = React.useContext(TypeTasteTextureContext);
    const availableTastes = [...new Set(data.filter((snack) => snack.type === type).map((snack) => snack.taste))];
    console.log('availableTastes:', availableTastes);

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
            <h2>Now, pick a taste</h2>
            <div className="taste-container option-container">
                {availableTastes.map((tasteValue) => (
                    <Radiobuttons
                        label={`${tasteValue}`}
                        name="TasteChoice"
                        id={`${tasteValue}`}
                        key={`${tasteValue}`}
                        value={tasteValue}
                        checked={taste === tasteValue}
                        onChange={(event) => {
                            setTaste(event.target.value);
                            setShowProgressButton(true);
                        }}
                        handleKeyDown={handleKeyDown(tasteValue)}>
                        {tasteValue}
                    </Radiobuttons>
                ))}
            </div>
            <div className="button-container">
                {showProgressButton && <ProgressButton currentAnswer={taste} questionID="2" />}
            </div>
        </>
    );
}

export default Taste;