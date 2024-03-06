import React from 'react';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import { PriceContext } from './PriceProvider';
import { SnackSuggestionContext } from './SnackSuggestionProvider';
import useSnackRandomizer from '../hooks/useSnackRandomizer.hook';

const SummaryScreen = () => {
    const { type, taste, texture } = React.useContext(TypeTasteTextureContext);
    const { flavor, importantCategories } = React.useContext(CheckboxChoiceContext);
    const { price } = React.useContext(PriceContext);
    const { suggestion } = React.useContext(SnackSuggestionContext);

    // call the useSnackRandomizer hook
    const randomizedSnack = useSnackRandomizer();

    // separate the categories with a comma
    const categoryList = importantCategories.length > 0 ? importantCategories.join(', ') : '';

    // display the flavors in a readable format depending on the number of flavors selected
    const flavorDisplay = () => {
        if (flavor.length === 1) {
            return ` Your flavor of choice was ${flavor[0]}`;
        } else if (flavor.length === 2) {
            return `${flavor[0]} and ${flavor[1]}`;
        } else if (flavor.length > 2) {
            const lastFlavor = flavor.pop();
            return `${flavor.join(', ')} and ${lastFlavor}`;
        }
    }

    return (
        <>
            <h1>Summary</h1>
            <p>According to your results you would like to see more {texture} {taste} {type} here at LocalMart.
                Perhaps some {randomizedSnack()}?</p>

            <p>You spend an average of €{price} on a snack purchase
                {importantCategories.length > 0 ? <span> and you&apos;d like us to stock {categoryList} snacks.</span> : '.'}</p>
            {suggestion && <p>You specifically suggested: {suggestion}</p>}
            {flavor.length === 1 && <p>{flavorDisplay()}</p>}
            {flavor.length > 1 && <p>Your flavors of choice are {flavorDisplay()}</p>}
        </>
    );
}

export default SummaryScreen;