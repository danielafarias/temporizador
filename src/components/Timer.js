import React from 'react';
import { useRef, useEffect, useState } from 'react';

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

    const HandleClick = () => { //Button Event
        if (!pause) {
            clearInterval(intervalRef.current); // If [pause = false] the interval reference is be the same = Run
        } else {
            intervalRef.current = setInterval(decreaseNum, 1000); // If [pause = true] will stop useEffect() = Pause
        }
        setPause((prev) => !prev);
    };

    return (
        <div>
            <div>{num}</div>
            <button onClick={HandleClick}>{pause ? "Run" : "Pause"}</button>
        </div>
    );
}

export default Temporizador;