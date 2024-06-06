import React from 'react';
import ScaleText from 'react-scale-text';
import './App.css';
import Card from './Card';

const params = '?' + window.location.href.split('?')[1]
const queryParams = new URLSearchParams(params)
const sf: number= queryParams.get("sf") === null ? 1 : queryParams.get("sf") as unknown as number

console.log("Found scale-factor (sci-fi): ", sf)

function App() {
    return (
        <div className="App">
            <Card text={"A"} scale={sf} />
        </div>
    );
}

export default App;
