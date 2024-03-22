import React from 'react';
import { TypeTasteTextureContext } from './TypeTasteTextureProvider';
import { CheckboxChoiceContext } from './CheckboxChoiceProvider';
import { PriceContext } from './PriceProvider';
import { SnackSuggestionContext } from './SnackSuggestionProvider';
import useSnackRandomizer from '../hooks/useSnackRandomizer.hook';
import EndButton from './EndButton';
import { ResultSpan } from '../styles/summary.styles';

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
            return ["Your flavor of choice is ", <ResultSpan key={0} className="result">{flavor[0]}</ResultSpan>];
        } else if (flavor.length === 2) {
            return [
                <ResultSpan key={0}>{flavor[0]}</ResultSpan>,
                " and ", <ResultSpan key={1}> {flavor[1]}</ResultSpan>
            ];
        } else if (flavor.length > 2) {
            const flavoredItems = flavor.map((item, index) => (
                <ResultSpan key={index}>{item}{index !== flavor.length - 1 ? ', ' : ''}</ResultSpan>
            ));
            flavoredItems.splice(flavoredItems.length - 1, 0, ' and ');
            return flavoredItems;
        }
    }

    return (
        <>
            <h1>Summary</h1>
            <div className="summary-container">
                <p>According to your results you would like to see more <ResultSpan>{texture} {taste} {type}</ResultSpan> here at YourCornerStore.
                    Perhaps some <ResultSpan>{randomizedSnack()}</ResultSpan>?</p>

                <p>You spend an average of <ResultSpan>€{price}</ResultSpan> on a snack purchase
                    {importantCategories.length > 0 ? <span> and you&apos;d like us to stock <ResultSpan>{categoryList}</ResultSpan> snacks.</span> : '.'}</p>
                {suggestion && <p>You specifically suggested: <ResultSpan>{suggestion}</ResultSpan></p>}
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