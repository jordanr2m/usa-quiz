import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState, useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

function Quiz() {
    const { score, setScore, setGameState } = useContext(GameStateContext);
    // A state to represent which question we are currently on
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // A state to represent whichever answer we chose
    const [optionChosen, setOptionChosen] = useState("");

    // Set optionChosen equal to whatever option is passed in
    const chooseOption = (option) => {
        setOptionChosen(option);
    }

    const nextQuestion = () => {
        // Compare to see if the answer was correct
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        // Increment value of currentQuestion by 1
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {
        // Check to see if the answer for the last question is correct
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        // change gameState to finished
        setGameState("finished")
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="questions">
                {/* Create an onClick event for each button to keep track of which option they chose */}
                <button onClick={() => { chooseOption("optionA") }}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => { chooseOption("optionB") }}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => { chooseOption("optionC") }}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => { chooseOption("optionD") }}>{Questions[currentQuestion].optionD}</button>
            </div>

            {/* See if the currentQuestion is the final question */}
            {currentQuestion === Questions.length - 1 ? (
                <button className="finishQuiz" onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                // Move to the next question if it isn't the last one
                <button className="nextQuestion" onClick={nextQuestion}>Next Question</button>
            )}

            <p>Question {currentQuestion + 1} / {Questions.length}</p>
        </div>
    )
}

export default Quiz;