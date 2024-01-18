import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChellange({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timer = useRef();
    const dialog = useRef();

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining((prevValue) => prevValue - 10);
        }, 10);
    };

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStop = () => {
        clearInterval(timer.current);
        dialog.current.open();
    };

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop Challenge" : "Start Challenge"}
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
