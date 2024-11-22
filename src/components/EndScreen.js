import "../App.css";
import { Questions } from "../helpers/Questions";
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

const EndScreen = () => {
    const { score, setScore, setGameState, userName, wrongAnswers, setWrongAnswers } = useContext(GameStateContext);

    const restartQuiz = () => {
        setScore(0);
        setWrongAnswers([]);
        setGameState("menu");
    }

    return (
        <div className="EndScreen">
            <h1>Quiz Complete!</h1>
            <h2>{userName.length === 0 ? "Quiz taker" : userName}, you got {score} out of {Questions.length} questions correct.</h2>
            <h2>Your score is <u>{score / Questions.length * 100}%</u></h2>
            {wrongAnswers.length > 0 && (
                <div className="wrong-answers">
                    <p>You missed the following {wrongAnswers.length === 1 ? "question" : "questions"}:</p>
                    <ul>
                        {wrongAnswers.map((answer, index) => (
                            <li key={index}>{answer.prompt}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={restartQuiz} className="restartQuiz">Restart Quiz</button>
        </div>
    )
}

export default EndScreen;