import React from 'react';

const VisuallyHidden = ({ children }) => {
    return (
        <span style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
            {children}
        </span>
    );
}

export default VisuallyHidden;