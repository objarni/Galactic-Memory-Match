import React from 'react';


const SoundEffects: React.FC = () => {
    const playSfx = () => {
        console.log("hello")
    }
    return (
        <div>
            <audio src={"drumloop.mp3"} id="audioTag"></audio>
            <button onClick={playSfx}>PLAY SFX</button>
        </div>
    );
}

export default SoundEffects;
