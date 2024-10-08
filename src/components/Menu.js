import "../App.css";
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

function Menu() {
    const { setGameState, setUserName } = useContext(GameStateContext);

    return (
        <div className="Menu">
            <label htmlFor="name">Enter your name:</label>
            <input
                id="name"
                type="text"
                placeholder="Name"
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setGameState("playing")
                    }
                }}
            />
            {/* Change game state when start is pressed */}
            <button onClick={() => setGameState("playing")}>Start Quiz</button>
        </div>
    )
}

export default Menu;