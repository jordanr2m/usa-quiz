import "../App.css";
import { Questions } from "../helpers/Questions";
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

const EndScreen = () => {
    const { score, setScore, setGameState, userName } = useContext(GameStateContext);

    // Function to restart game
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className="EndScreen">
            <h1>Quiz Complete!</h1>
            <h2>{userName.length === 0 ? "Quiz taker" : userName}, you got {score} out of {Questions.length} questions correct.</h2>
            <h2>Your grade is <u>{score / Questions.length * 100}%</u></h2>
            <button onClick={restartQuiz} className="restartQuiz">Restart Quiz</button>
        </div>
    )
}

export default EndScreen;