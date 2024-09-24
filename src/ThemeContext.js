import React, {createContext,useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider =({child})=>{
    const [theme, setTheme]=useState('light');  
    const toggleTheme=()=>{
        setTheme(theme==='light'?'dark':'light');
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        {child}
        </ThemeContext.Provider>
    );
}