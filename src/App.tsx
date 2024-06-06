import React from 'react';
import ScaleText from 'react-scale-text';
import './App.css';

const params = '?' + window.location.href.split('?')[1]
const queryParams = new URLSearchParams(params)
const sf = queryParams.get("sf") === null ? 1 : queryParams.get("sf")

console.log("Found scale-factor (sci-fi): ", sf)

function App() {
    return (
        <div className="App">
            <ScaleText>
                Galactic Memory Match!
            </ScaleText>
        </div>
    );
}

export default App;
