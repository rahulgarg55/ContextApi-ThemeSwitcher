// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
}

export default App;
