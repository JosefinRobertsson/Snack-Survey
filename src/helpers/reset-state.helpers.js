
export const resetAnswers = (questionID, setType, setTaste, setTexture, setFlavor) => {
    console.log('questionID:', questionID);

    switch (questionID) {
        case '0':
            setType('')
            setTaste('');
            setTexture('');
            break;
        case '1':
            setTaste('');
            setTexture('');
            setFlavor([]);
            break;
        case '2':
            setTexture('');
            setFlavor([]);
            break;
            case '3':
            setFlavor([]);
            break;
        default:
            break;
    }

    return;
}