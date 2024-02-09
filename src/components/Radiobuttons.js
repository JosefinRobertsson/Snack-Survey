import React from "react";

const Radiobuttons = ({ label, id, children, handleKeyDown, ...delegated }) => {

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
          }}>
            <input
                type="radio"
                id={id}
                className="radio-input"
                {...delegated}
            />
            <label
                htmlFor={id}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="radio-label">
                {children}
            </label>
        </form>
    );
}

export default Radiobuttons;