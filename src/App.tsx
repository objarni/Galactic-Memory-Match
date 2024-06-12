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
        left: props.pos.x * props.scale,
        top: props.pos.y * props.scale,
        transform: `scale(${props.scale})`,
        transformOrigin: 'top left'
    };
    return <img src={props.image} alt="" style={style}/>
}

function App() {
    const p1 = {x: 0, y: 0}
    const p2 = {x: 100, y: 100}
    const p3 = {x: 200, y: 200}
    return (
        <div className="App">
            <Card text={"A"} pos={p3} scale={sf}/>
            <Sprite image={Image} pos={p1} scale={sf}/>
            <Sprite image={Image} pos={p2} scale={sf}/>
            <Sprite image={Image} pos={p3} scale={sf}/>
        </div>
    );
}

export default App;
