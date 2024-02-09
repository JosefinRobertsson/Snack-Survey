
export const resetAnswers = (questionID, setType, setTaste, setTexture, setFlavor, setPrice, setImportantCategories) => {

    switch (questionID) {
        case '0':
            setType('')
            setTaste('');
            setTexture('');
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            break;
        case '1':
            setTaste('');
            setTexture('');
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            break;
        case '2':
            setTexture('');
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            break;
        case '3':
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            break;
        case '4':
            setPrice(7);
            setImportantCategories([]);
            break;
        case '5':
            setImportantCategories([]);
            break;
        case '6':

            break;
        default:
            break;
    }

    return;
}