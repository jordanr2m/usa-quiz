import "../App.css";
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

function Menu() {
    // get an instance of the context in order to have full access to these values
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
            {/* Change game state once they click the start button */}
            <button onClick={() => { setGameState("playing") }}>Start Quiz</button>
        </div>
    )
}

export default Menu;