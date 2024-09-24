import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} style={{ margin: '20px', padding: '10px' }}>
            Toggle Theme
        </button>
    );
};

export default ThemeToggle;
