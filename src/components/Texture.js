import React from "react";
import Radiobuttons from "./Radiobuttons";
import { range } from "../utils";
import { ProgressContext } from './ProgressProvider';
import { TypeTasteTextureContext } from "./TypeTasteTextureProvider";
import ProgressButton from "./ProgressButton";

const Texture = ({ data }) => {
    const { showProgressButton, setShowProgressButton } = React.useContext(ProgressContext);
    const { type, taste, texture, setTexture } = React.useContext(TypeTasteTextureContext);
    const availableTextures = [...new Set(data.filter((snack) => snack.type === type && snack.taste === taste).map((snack) => snack.texture))];

    React.useEffect(() => {
        if (taste === '') {
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
            <div className="textureGroup-container">
                <h2>Pick a texture</h2>
                {range(availableTextures.length).map((num) => (
                    <Radiobuttons
                        label={`${availableTextures[num]}`}
                        name="TextureChoice"
                        id={`${availableTextures[num]}`}
                        key={`${availableTextures[num]}`}
                        value={availableTextures[num]}
                        checked={texture === availableTextures[num]}
                        onChange={(event) => {
                            setTexture(event.target.value);
                            setShowProgressButton(true);
                        }}
                        handleKeyDown={handleKeyDown(availableTextures[num])}>
                        {availableTextures[num]}
                    </Radiobuttons>

                ))}
            </div>
            {showProgressButton && <ProgressButton currentAnswer={texture} questionID="3" />}

        </>
    );
}

export default Texture;