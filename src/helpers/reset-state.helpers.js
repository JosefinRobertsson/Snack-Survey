
export const resetAnswers = (questionID, setType, setTaste, setTexture, setFlavor, setPrice, setImportantCategories, setSuggestion, setDropdown) => {

    switch (questionID) {
        case '0':
            setType('')
            setTaste('');
            setTexture('');
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            setSuggestion('');
            setDropdown('empty');
            break;
        case '1':
            setTaste('');
            setTexture('');
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            setSuggestion('');
            setDropdown('empty');
            break;
        case '2':
            setTexture('');
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            setSuggestion('');
            setDropdown('empty');
            break;
        case '3':
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            setSuggestion('');
            setDropdown('empty');
            break;
        case '4':
            setPrice(7);
            setImportantCategories([]);
            setSuggestion('');
            setDropdown('empty');
            break;
        case '5':
            setImportantCategories([]);
            setSuggestion('');
            setDropdown('empty');
            break;
        case '6':
        setSuggestion('');
        setDropdown('empty');
            break;
        case '8':
            setType('')
            setTaste('');
            setTexture('');
            setFlavor([]);
            setPrice(7);
            setImportantCategories([]);
            setSuggestion('');
            setDropdown('empty');
            break;
        default:
            break;
    }

    return;
}

