import React from 'react';
import { CheckedLabel } from '../styles/radio-check.styles';

const Checkboxes = ({ label, id, children, onKeyDown, ...delegated }) => {
    
        return (
            <form>
                <input
                    type="checkbox"
                    tabindex={-1}
                    id={id}
                    {...delegated}
                    onKeyDown={onKeyDown}
                    className="checkbox-input"
                />
                <CheckedLabel
                    htmlFor={id}
                    checked={delegated.checked} 
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    className="checkbox-label">
                    {children}
                </CheckedLabel>
            </form>
        );
    }

export default Checkboxes;