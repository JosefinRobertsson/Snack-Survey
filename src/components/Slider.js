import React from 'react';
import ProgressButton from './ProgressButton';
import { PriceContext } from './PriceProvider';

const Slider = () => {
    const { price, setPrice } = React.useContext(PriceContext);


    return (
        <>
            <h2>How much do you spend on an average snackrun?</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <label htmlFor="price-slider">
                    
                </label>
                <input
                    type="range" min={1} max={20} value={price} id="price-slider"
                    onChange={event => {
                        setPrice(event.target.value);
                    }}
                />
            </form>
            <p>€ {price}</p>
            <ProgressButton currentAnswer={price} questionID="5" />
        </>
    );
}

export default Slider;