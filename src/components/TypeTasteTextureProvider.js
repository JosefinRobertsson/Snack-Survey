import React from "react";

export const TypeTasteTextureContext = React.createContext();

const TypeTasteTextureProvider = ({ children }) => {
    const [type, setType] = React.useState('');
    const [taste, setTaste] = React.useState('');
    const [texture, setTexture] = React.useState('');

    return (
        <TypeTasteTextureContext.Provider value={{ type, setType, taste, setTaste, texture, setTexture }}>
            {children}
        </TypeTasteTextureContext.Provider>
    );
}

export default TypeTasteTextureProvider;