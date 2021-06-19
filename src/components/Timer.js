import React from 'react';
import { useRef, useEffect, useState } from 'react';
import github from '../github.png';

function Temporizador() {
    const [num, setNum] = useState(100); // Number default value;
    const [pause, setPause] = useState(false); // Pause default state, to continue;

    let intervalRef = useRef(); // Interval Reference

    const decreaseNum = () => setNum((prev) => prev - 1); // Atual number minus 1;

    useEffect(() => {
        setPause(false); // Unstop countdown
        intervalRef.current = setInterval(decreaseNum, 1000); // Execute decreaseNum() in 1000ms;
        return () => clearInterval(intervalRef.current); // Save reference
    }, []);

    const handleClick = () => { //Button Event
        if (!pause) {
            clearInterval(intervalRef.current); // If [pause = false] the interval reference is be the same = Run
        } else {
            intervalRef.current = setInterval(decreaseNum, 1000); // If [pause = true] will stop useEffect() = Pause
        } 
        setPause((prev) => !prev);

    };

    return (
        <div className='timer'>
            <h1>TIMER</h1>
            <div className='number'>{num}</div>
            <div className='buttons'>
                <button id='button' onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
            </div>
            <div className='footer'>
                <a href='https://github.com/danielafarias/timer'>
                    <img className='git-logo' alt='github logo' src={github}></img>
                </a>
            </div>
        </div>
    );
}

export default Temporizador;