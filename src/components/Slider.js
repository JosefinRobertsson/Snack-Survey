import React from 'react';
import ProgressButton from './ProgressButton';
import { PriceContext } from './PriceProvider';
import { PriceSlider, RangeUpdate } from '../styles/slider.styles';
import ProgressBar from './ProgressBar';


const Slider = () => {
    const { price, setPrice } = React.useContext(PriceContext);


    return (
        <div className="content-container">
            <h2>How much do you spend on an average snackrun?</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <label htmlFor="price-slider">

                </label>
                <PriceSlider
                    type="range"
                    min={1} max={20}
                    value={price}
                    id="price-slider"
                    className="slider"
                    tabIndex="0"
                    onChange={event => {
                        setPrice(event.target.value);
                    }}
                />
            </form>
            <RangeUpdate>€ {price}</RangeUpdate>
            <ProgressBar previousStep={4} />
            <div className="button-container">
                <ProgressButton currentAnswer={price} questionID="5" />
            </div>
        </div>
    );
}

export default Slider;