import React from 'react';
import ScaleText from "react-scale-text";

interface CardProps {
    text: string;
    scale: number;
}

const Card: React.FC<CardProps> = ({ text, scale }) => {
    // Determine the size of the card based on the scale
    const size = scale * 100; // Base size is 100px; adjust as needed

    // Styles for the card
    const cardStyle: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        padding: '20px',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease-in-out'
    };

    return (
        <div style={cardStyle}>
            <ScaleText>
                {text}
            </ScaleText>
        </div>
    );
}

export default Card;
