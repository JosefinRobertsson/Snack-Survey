import React from "react";
import { CheckedLabel } from "../styles/radio-check.styles";

const Radiobuttons = ({ label, id, children, handleKeyDown, ...delegated }) => {

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
          }}>
            <input
                type="radio"
                tabIndex={-1}
                id={id}
                className="radio-input"
                {...delegated}
            />
            <CheckedLabel
                htmlFor={id}
                checked={delegated.checked}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="radio-label">
                {children}
            </CheckedLabel>
        </form>
    );
}

export default Radiobuttons;