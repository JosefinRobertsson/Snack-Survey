import React from 'react';
import { snackbase } from '../snackbase';
import { TypeTasteTextureContext } from '../components/TypeTasteTextureProvider';
import { CheckboxChoiceContext } from '../components/CheckboxChoiceProvider';

const useSnackRandomizer = () => {
    const { type, taste, texture } = React.useContext(TypeTasteTextureContext);
    const { flavor } = React.useContext(CheckboxChoiceContext);
    const [snackList, setSnackList] = React.useState([]);

    React.useEffect(() => {
        const matchingSnacks = snackbase.filter((snack) => {
            return snack.type === type &&
                snack.taste === taste &&
                snack.texture === texture &&
                { flavor }
        });
        setSnackList(matchingSnacks);
    }, [type, taste, texture, flavor]);

    const randomizedSnack = () => {
        if (snackList.length === 0) {
            return;
        }
        const index = Math.floor(Math.random() * snackList.length);
        return snackList[index].name;
    }

    return randomizedSnack;
}

export default useSnackRandomizer;