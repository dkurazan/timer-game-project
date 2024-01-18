import { useState, useRef } from "react";

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState();

    const userName = useRef();

    const handleOnClick = () => {
        setEnteredPlayerName(userName.current.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setEnteredPlayerName(userName.current.value);
        }
    };

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
            <p>
                <input type="text" ref={userName} onKeyPress={handleKeyPress} />
                <button onClick={handleOnClick}>Set Name</button>
            </p>
        </section>
    );
}
