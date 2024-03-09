import React from "react";
import Radiobuttons from "./Radiobuttons";
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from "./TypeTasteTextureProvider";
import ProgressButton from "./ProgressButton";

const Texture = ({ data }) => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const { type, taste, texture, setTexture } = React.useContext(TypeTasteTextureContext);
    const availableTextures = [...new Set(data.filter((snack) => snack.type === type && snack.taste === taste).map((snack) => snack.texture))];

    React.useEffect(() => {
        if (texture === '') {
            setShowProgressButton(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyDown = (selectedTexture) => (e) => {
        if (e.key === 'Enter') {
            setTexture(selectedTexture);
            setShowProgressButton(true);
        }
    };

    return (
        <>
            <h2>Pick a texture</h2>
            <div className="texture-container option-container">
                {availableTextures.map((textureValue) => (
                    <Radiobuttons
                        label={`${textureValue}`}
                        name="TasteChoice"
                        id={`${textureValue}`}
                        key={`${textureValue}`}
                        value={textureValue}
                        checked={texture === textureValue}
                        onChange={(event) => {
                            setTexture(event.target.value);
                            setShowProgressButton(true);
                        }}
                        handleKeyDown={handleKeyDown(textureValue)}>
                        {textureValue}
                    </Radiobuttons>
                ))}
            </div>
            <div className="button-container">
                {showProgressButton && <ProgressButton currentAnswer={texture} questionID="3" />}
            </div>

        </>
    );
}

export default Texture;