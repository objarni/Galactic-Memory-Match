import React from 'react';
import Image from './Ring.png';
import './App.css';
import Card from './Card';

const params = '?' + window.location.href.split('?')[1]
const queryParams = new URLSearchParams(params)
const sf: number = queryParams.get("sf") === null ? 1 : queryParams.get("sf") as unknown as number

console.log("Scale factor (sci-fi): ", sf)

function Sprite(props: { image: string, pos: { x: number; y: number }, scale: number }) {
    const style: React.CSSProperties = {
        position: 'absolute',
        left: props.pos.x * props.scale * 10,
        top: props.pos.y * props.scale,
        transform: `scale(${props.scale})`
    };
    return <img src={props.image} alt="" style={style}/>
}

function App() {
    const p = {x: 2, y: 100}
    return (
        <div className="App">
            <Card text={"A"} scale={sf}/>
            <Sprite image={Image} pos={p} scale={sf}/>
        </div>
    );
}

export default App;
