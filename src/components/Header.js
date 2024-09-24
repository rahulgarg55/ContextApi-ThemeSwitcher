import React, {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';

const Header =()=>{
    const {theme}=useContext(ThemeContext);

    return (
        <header style = {{padding:'10px', backgroundColor:theme==='light'? '#f0f0f0':'#333',color:theme==='light'? '#000':'#fff'}}> 
        <h1>Current Theme:{theme.toUpperCase()}</h1>
        <h1>Made by Rahul Garg</h1>
    </header>
    )
};
export default Header;