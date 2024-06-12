import React from 'react';
import ScaleText from "react-scale-text";

interface CardProps {
    text: string,
    scale: number,
    pos: { x: number; y: number }
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    // Determine the size of the card based on the scale
    const size = 100 * props.scale; // Base size is 100px; adjust as needed

    // Styles for the card
    const cardStyle: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        padding: '10px',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-in-out',
        position: 'absolute',
        left: `${props.pos.x * props.scale}px`,
        top: `${props.pos.y * props.scale}px`,
        transform: `scale(${props.scale})`,
        transformOrigin: 'top left'
    };

    return (
        <div style={cardStyle}>
            <ScaleText>
                {props.text}
            </ScaleText>
        </div>
    );
}

export default Card;
