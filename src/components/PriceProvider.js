import React from 'react';

export const PriceContext = React.createContext();

const PriceProvider = ({ children }) => {
    const [price, setPrice] = React.useState(10);

    return (
        <PriceContext.Provider value={{ price, setPrice }}>
            {children}
        </PriceContext.Provider>
    );
}

export default PriceProvider;