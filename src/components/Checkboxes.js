import React from 'react';

const Checkboxes = ({ label, id, children, handleKeyDown, ...delegated }) => {
    
        return (
            <form
            onSubmit={(event) => {
                event.preventDefault();
              }}>
                <input
                    type="checkbox"
                    id={id}
                    onKeyDown={handleKeyDown}
                    className="checkbox-input"
                    {...delegated}
                />
                <label
                    htmlFor={id}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    className="checkbox-label">
                    {children}
                </label>
            </form>
        );
    }

export default Checkboxes;