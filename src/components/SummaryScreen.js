import React from 'react';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import { PriceContext } from './PriceProvider';
import { SnackSuggestionContext } from './SnackSuggestionProvider';
import useSnackRandomizer from '../hooks/useSnackRandomizer.hook';
import EndButton from './EndButton';

const SummaryScreen = () => {
    const { type, taste, texture } = React.useContext(TypeTasteTextureContext);
    const { flavor, importantCategories } = React.useContext(CheckboxChoiceContext);
    const { price } = React.useContext(PriceContext);
    const { suggestion } = React.useContext(SnackSuggestionContext);

    // call the useSnackRandomizer hook to get a random snack
    const randomizedSnack = useSnackRandomizer();

    // separate the categories with a comma
    const categoryList = importantCategories.length > 0 ? importantCategories.join(', ') : '';

    // separate the flavors to display in a readable format adding spans in correct places
    const flavorDisplay = () => {
        if (flavor.length === 1) {
            return ["Your flavor of choice is ", <span key={0} className="result">{flavor[0]}</span>];
        } else if (flavor.length === 2) {
            return [
                <span key={0} className="result">{flavor[0]}</span>,
                " and ", <span key={1} className="result"> {flavor[1]}</span>
            ];
        } else if (flavor.length > 2) {
            const flavoredItems = flavor.map((item, index) => (
                <span key={index} className="result">{item}{index !== flavor.length - 1 ? ', ' : ''}</span>
            ));
            flavoredItems.splice(flavoredItems.length - 1, 0, ' and ');
            return flavoredItems;
        }
    }

    return (
        <>
            <h1>Summary</h1>
            <div className="summary-container">
                <p>According to your results you would like to see more <span className="result">{texture} {taste} {type}</span> here at YourCornerStore.
                    Perhaps some <span className="result">{randomizedSnack()}</span>?</p>

                <p>You spend an average of <span className="result">€{price}</span> on a snack purchase
                    {importantCategories.length > 0 ? <span> and you&apos;d like us to stock <span className="result">{categoryList}</span> snacks.</span> : '.'}</p>
                {suggestion && <p>You specifically suggested: <span className="result">{suggestion}</span></p>}
                {flavor.length === 1 && <p>{flavorDisplay()}</p>}
                {flavor.length > 1 && <p>Your flavors of choice are {flavorDisplay()}</p>}
                <p>Does this sound about right? If so please submit your answers!</p>
            </div>
            <div className="button-container">
                <EndButton questionID='8' />
            </div>
        </>
    );
}

export default SummaryScreen;