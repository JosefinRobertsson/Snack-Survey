
export const resetAnswers = (questionID, setType, setTaste, setTexture) => {
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
            break;
        case '2':
            setTexture('');
            break;
        default:
            break;
    }

    return;
}