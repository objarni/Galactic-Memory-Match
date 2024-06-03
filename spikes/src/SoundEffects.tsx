import React from 'react';
import { drumloop } from './assets/drumloop.mp3'

const SoundEffects: React.FC = () => {

    const playSfx = () => {
        const sample = new Audio('assets/flynn.wav')
        sample.play()
        // const audioTag = document.getElementById("audioTag") as HTMLAudioElement
        // if(audioTag === null) {
        //     console.log("Could not find audioTag")
        //     return
        // }
        // audioTag.play()
        // console.log("hello")
    }

    return (
        <div>
            <button onClick={playSfx}>PLAY SFX</button>
        </div>
    );
}

export default SoundEffects;
