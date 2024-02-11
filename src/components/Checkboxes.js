import React from 'react';

const Checkboxes = ({ label, id, children, onKeyDown, ...delegated }) => {
    
        return (
            <form>
                <input
                    type="checkbox"
                    id={id}
                    {...delegated}
                    onKeyDown={onKeyDown}
                    className="checkbox-input"
                />
                <label
                    htmlFor={id}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    className="checkbox-label">
                    {children}
                </label>
            </form>
        );
    }

export default Checkboxes;