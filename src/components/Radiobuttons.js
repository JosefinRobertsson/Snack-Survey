import React from "react";

const Radiobuttons = ({ label, id, children, handleKeyDown, ...delegated }) => {

    return (
        <form>
            <input
                type="radio"
                id={id}
                className="radio-input"
                aria-label={children}
                {...delegated}
            />
            <label
                htmlFor={id}
                tabIndex={0}
                aria-label={children}
                onKeyDown={handleKeyDown}
                className="radio-label">
                {children}
            </label>
        </form>
    );
}

export default Radiobuttons;